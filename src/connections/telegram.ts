import Queue, { Job } from "bull";
import i18n from "@root/i18n";
import redis from "@root/queue";
import httpClient from "@root/http-client";
import { chatNotFound, botMuted, noTopic } from "@root/controllers/bots/tenthings/providers/telegram/errors";
import { checkSpam } from "@root/controllers/bots/tenthings/providers/telegram/spam";
import { TelegramMessageType } from "@root/controllers/api/tenthings/telegram";
import { parseSymbols, maskUrls } from "@utils/string-helpers";
import moment, { Moment } from "moment";
import { Command } from "@root/controllers/bots/tenthings/providers/telegram/commands";
import { IGame } from "@root/models/tenthings/game";
import { TelegramCallbackData } from "@tenthings/providers/telegram/callbacks";
import { convertTelegramUserToPlayer, TelegramMessage } from "@root/controllers/bots/tenthings/providers/telegram";
import { classifyTelegramError, describeFailure, Failure } from "@root/connections/telegram-errors";
import { styleText } from "util";

const BANNED_TELEGRAM_USERS = [1726294650, 6758829541];

type UserInput = TelegramMessage | TelegramCallbackData;

const redisConfig = {
  port: parseInt(process.env.REDIS_PORT || "6379"),
  host: process.env.REDIS_HOST || "localhost",
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
};

const globalQueue = new Queue("sendMessage", {
  redis: redisConfig,
  limiter: {
    max: 30,
    duration: 1000,
  },
});

const chatQueue = new Queue("queueMessage", {
  redis: redisConfig,
  limiter: {
    max: 20,
    duration: 60000,
    groupKey: "chat",
  },
});

globalQueue.on("completed", function (job: Job) {
  //Job finished we remove it
  job.remove();
});

chatQueue.on("completed", function (job: Job) {
  //Job finished we remove it
  job.remove();
});

export type TelegramUser = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  name?: string;
  language_code?: string;
};

export type KeyboardCallbackButton = {
  text: string;
  callback_data: string;
};
export type KeyboardUrlButton = {
  text: string;
  url: string;
};

export type KeyboardButton = KeyboardCallbackButton | KeyboardUrlButton;

export type Keyboard =
  | {
      inline_keyboard: Array<Array<KeyboardButton>>;
    }
  | {
      keyboard: Array<Array<KeyboardButton>>;
      one_time_keyboard?: boolean;
      input_field_placeholder?: string;
      resize_keyboard?: boolean;
      selective?: boolean;
    };

export type Channel = {
  chat: number;
  topic?: number;
};

type ReplyMarkup = Keyboard;

type MessageOptions = { replyMessageId?: string; replyMarkup?: ReplyMarkup };

type CallOptions = {
  /** The chat the call is about: named in logs, muted when it's gone. */
  channel?: Channel;
  /** How many times to retry a transient failure. Only for calls that are safe to repeat. */
  retries?: number;
  /** What was being sent, quoted in the admin alert when the failure is unknown. */
  content?: string;
  /** Sends it again later when Telegram rate-limits us. */
  requeue?: () => void;
  /** The caller handles these failures itself: no log, alert or muting. */
  expect?: (failure: Failure) => boolean;
};

type CallResult<T> = { ok: true; result: T } | { ok: false; failure: Failure };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Telegram takes objects (keyboards, scopes) as JSON in the query string. */
const toQuery = (params: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, typeof value === "object" ? JSON.stringify(value) : value]),
  );

const stripHtml = (text: string) => text.replace(/<[^>]*>/g, "");

class TelegramBot {
  private baseUrl: string;
  private telegramBotUser: TelegramUser | undefined;
  private paused: boolean = false;
  private timeoutUntil: Moment | undefined;

  constructor(token: string) {
    this.baseUrl = `https://api.telegram.org/bot${token}`;
    this.init();
  }

  private init = async () => {
    const bot = this;
    globalQueue.on("failed", function (job: Job, error: any) {
      bot.notifyAdmin(`Error in global queue: ${job.data.message}`);
      console.error("Global queue job failed:", error?.message);
    });
    chatQueue.on("failed", function (job: Job, error: any) {
      bot.notifyAdmin(`Error in chat queue: ${job.data.message}`);
      console.error("Chat queue job failed:", error?.message);
    });
    this.resumeQueue();
    // Keep trying until Telegram answers: a network blip at boot shouldn't leave the bot nameless.
    for (let attempt = 0; ; attempt++) {
      const response = await this.call<TelegramUser>("getMe", {});
      if (response.ok) {
        this.telegramBotUser = response.result;
        this.introduceYourself();
        return;
      }
      if (response.failure.kind !== "transient") return;
      await sleep(Math.min(2 ** attempt, 60) * 1000);
    }
  };

  /**
   * Every request to the Bot API goes through here. A transient failure is retried `retries` times with
   * backoff (1s, 2s, 4s…); whatever still fails is logged as one line, and only failures nobody expected
   * reach the admin chat. Never throws.
   */
  private call = async <T = any>(
    method: string,
    params: Record<string, unknown>,
    options: CallOptions = {},
    attempt = 0,
  ): Promise<CallResult<T>> => {
    try {
      const { data } = await httpClient().get(`${this.baseUrl}/${method}`, { params: toQuery(params) });
      return { ok: true, result: data.result };
    } catch (error) {
      const failure = classifyTelegramError(error);
      if (options.expect?.(failure)) return { ok: false, failure };
      const retries = options.retries ?? 0;
      if (failure.kind === "transient" && attempt < retries) {
        console.warn(describeFailure(method, options.channel?.chat, failure, `retry ${attempt + 1}/${retries}`));
        await sleep(2 ** attempt * 1000);
        return this.call<T>(method, params, options, attempt + 1);
      }
      this.handleFailure(method, failure, options, attempt);
      return { ok: false, failure };
    }
  };

  private handleFailure = (method: string, failure: Failure, options: CallOptions, attempts: number) => {
    const { channel, content, requeue } = options;
    const chat = channel?.chat;
    const isAdminChat = chat === parseInt(process.env.MASTER_CHAT || "");
    switch (failure.kind) {
      case "transient":
        console.warn(describeFailure(method, chat, failure, attempts > 0 ? `gave up after ${attempts} retries` : ""));
        return;
      case "rateLimited":
        this.pauseQueue(failure.retryAfter!, chat);
        requeue?.();
        return;
      case "chatGone":
        console.warn(describeFailure(method, chat, failure));
        if (chat !== undefined) botMuted(chat, failure.reason);
        return;
      case "topicGone":
        console.warn(describeFailure(method, chat, failure));
        if (chat !== undefined) noTopic(chat);
        return;
      case "ignorable":
        return;
      case "unknown":
        console.error(describeFailure(method, chat, failure));
        if (!isAdminChat) {
          const quoted = content ? `\n${stripHtml(content).substring(0, 300)}` : "";
          this.notifyAdmin(
            parseSymbols(
              `Error from "${method}" in channel ${chat ?? "-"}:\n${failure.reason ?? failure.code}${quoted}`,
            ),
          );
        }
        return;
    }
  };

  private pauseQueue = (seconds: number, chat?: number) => {
    if (this.paused) return;
    this.paused = true;
    globalQueue.pause();
    this.timeoutUntil = moment().add(seconds, "seconds");
    if (seconds > 100) this.notifyAdmin(`Pausing queue for ${seconds} seconds due to too many requests`);
    else console.log(`${chat} - Pausing queue for ${seconds} seconds due to too many requests`);
    setTimeout(this.resumeQueue, seconds * 1000);
  };

  public setWebhook = async (api: string) => {
    const response = await this.call("setWebhook", {
      url: `https://belgocanadian.com/bots/${api}`,
      allowed_updates: ["message", "callback_query", "chat_member"],
    });
    return response.ok ? response.result : undefined;
  };

  public getWebhook = async () => {
    const response = await this.call("getWebhookInfo", {}, { retries: 1 });
    return response.ok ? response.result : undefined;
  };

  public deleteWebhook = async () => {
    await this.call("deleteWebhook", {});
  };

  private messageParams = (channel: Channel, options: MessageOptions = {}) => ({
    chat_id: channel.chat,
    disable_notification: true,
    message_thread_id: channel.topic,
    ...(options.replyMessageId
      ? {
          reply_markup: { force_reply: true, selective: true },
          reply_parameters: { message_id: options.replyMessageId, allow_sending_without_reply: true },
        }
      : {}),
    ...(options.replyMarkup ? { reply_markup: options.replyMarkup } : {}),
  });

  public sendMessage = async (channel: Channel, message: string, options: MessageOptions = {}) => {
    await this.call(
      "sendMessage",
      { ...this.messageParams(channel, options), parse_mode: "html", text: message },
      { channel, retries: 6, content: message, requeue: () => this.queueMessage(channel, message) },
    );
  };

  public sendRichMessage = async (channel: Channel, html: string, options: MessageOptions = {}) => {
    await this.call(
      "sendRichMessage",
      { ...this.messageParams(channel, options), rich_message: { html } },
      { channel, retries: 6, content: html, requeue: () => this.queueRichMessage(channel, html) },
    );
  };

  public deleteMessage = async (channel: Channel, message_id: string) => {
    await this.call("deleteMessage", { chat_id: channel.chat, message_id }, { channel, retries: 3 });
  };

  public queueMessage = async (channel: Channel, message: string) => {
    chatQueue.add("", { channel, message, action: "sendMessage", chat: channel.chat }, {});
    if (this.timeoutUntil && moment().isAfter(this.timeoutUntil)) {
      this.resumeQueue();
    }
  };

  public queueRichMessage = async (channel: Channel, html: string) => {
    chatQueue.add("", { channel, html, action: Actions.SendRichMessage, chat: channel.chat }, {});
    if (this.timeoutUntil && moment().isAfter(this.timeoutUntil)) {
      this.resumeQueue();
    }
  };

  public resumeQueue = async () => {
    if (await globalQueue.isPaused()) {
      globalQueue.resume();
      this.paused = false;
      this.timeoutUntil = undefined;
    }
  };

  public getQueueCount = async (): Promise<number> => {
    return await globalQueue.count();
  };

  public kick = async (channel: Channel, userId: number, minutes: number) => {
    if (!minutes) minutes = 1;
    let date = new Date();
    const untilDate = Math.floor(date.setTime(date.getTime() + minutes * 60 * 1000) / 1000);
    await this.call(
      "kickChatMember",
      { chat_id: channel.chat, user_id: userId, until_date: untilDate },
      { channel, retries: 1 },
    );
  };

  public notifyCosmicForce = async (msg: string, keyboard?: Keyboard) => {
    if (keyboard)
      await this.sendMessage({ chat: parseInt(process.env.COSMIC_FORCE_CHAT || ""), topic: 17 }, msg, {
        replyMarkup: keyboard,
      });
    else await this.sendMessage({ chat: parseInt(process.env.COSMIC_FORCE_CHAT || ""), topic: 17 }, msg);
  };

  public notifyAdmin = async (msg: string) => {
    await this.queueMessage({ chat: parseInt(process.env.MASTER_CHAT || "") }, msg);
  };

  public notify = async (msg: string) => {
    await this.queueMessage({ chat: parseInt(process.env.NOTICE_CHAT || "") }, msg);
  };

  public notifyAdmins = async (msg: string, keyboard?: Keyboard) => {
    if (process.env.NODE_ENV === "production") {
      if (keyboard) await this.sendKeyboard({ chat: parseInt(process.env.ADMIN_CHAT || "") }, msg, keyboard);
      else await this.queueMessage({ chat: parseInt(process.env.ADMIN_CHAT || "") }, msg);
    }
  };

  public broadcast = async (channels: Channel[], message: string, { silent = false } = {}) => {
    if (!silent) await this.notifyAdmin(`Starting broadcast to ${channels.length} chats`);
    channels.forEach((channel: Channel, index) => {
      setTimeout(() => {
        this.queueMessage(channel, message);
        if (!silent && index === channels.length - 1) {
          this.notifyAdmin("Broadcast finished");
        }
      }, index * 100);
    });
  };

  public exportChatInviteLink = async (channel: Channel): Promise<string | undefined> => {
    const response = await this.call<string>(
      "exportChatInviteLink",
      { chat_id: channel.chat },
      { channel, retries: 1 },
    );
    return response.ok ? response.result : undefined;
  };

  public getChat = async (channel: Channel): Promise<string | null> => {
    const response = await this.call(
      "getChat",
      { chat_id: channel.chat },
      { channel, retries: 1, expect: (failure) => failure.status === 400 },
    );
    if (!response.ok) {
      if (response.failure.status === 400) chatNotFound(channel.chat);
      return null;
    }
    const chat = response.result;
    if (chat.invite_link) return `Group Chat: ${chat.invite_link}`;
    else if (chat.title) return `Group Chat: ${chat.title}`;
    else if (chat.username) return `Private Chat: @${chat.username}`;
    else if (chat.first_name) return `Private Chat: ${chat.first_name}`;
    else if (chat.type === "private") return `Private Chat`;
    return "";
  };

  public getChatMember = async (channel: Channel, userId: number) => {
    const response = await this.call(
      "getChatMember",
      { chat_id: channel.chat, user_id: userId },
      { channel, retries: 1 },
    );
    if (!response.ok) return undefined;
    return !["restricted", "left", "kicked"].includes(response.result?.status);
  };

  public checkAdmin = async (game: IGame, user: TelegramUser) => {
    if (user.id === parseInt(process.env.MASTER_CHAT || "")) return true;
    if (game.telegramChannel.chat > 0) return true;
    const player = await convertTelegramUserToPlayer(game, user);
    const response = await this.call(
      "getChatMember",
      { chat_id: game.telegramChannel.chat, user_id: user.id },
      {
        channel: game.telegramChannel,
        retries: 1,
        expect: (failure) => failure.reason === "Bad Request: CHAT_ADMIN_REQUIRED",
      },
    );
    if (!response.ok) return response.failure.reason === "Bad Request: CHAT_ADMIN_REQUIRED" ? true : undefined;
    const admin = ["creator", "administrator"].includes(response.result?.status);
    if (player) {
      player.admin = admin;
      await player.save();
    }
    return admin;
  };

  public sendKeyboard = async (channel: Channel, message: string, keyboard: Keyboard) => {
    this.sendMessage(channel, message.replace("&", "and"), { replyMarkup: keyboard });
  };

  public sendPhoto = async (channel: Channel, photo: string) => {
    await this.call(
      "sendPhoto",
      { chat_id: channel.chat, photo, message_thread_id: channel.topic },
      { channel, retries: 3, content: photo },
    );
  };

  public sendAnimation = async (channel: Channel, animation: string) => {
    await this.call(
      "sendAnimation",
      { chat_id: channel.chat, animation, message_thread_id: channel.topic },
      { channel, retries: 3, content: animation },
    );
  };

  public editKeyboard = async (channel: Channel, message_id: string, keyboard: Keyboard) => {
    await this.call(
      "editMessageReplyMarkup",
      { chat_id: channel.chat, message_id, reply_markup: keyboard },
      { channel, retries: 3 },
    );
  };

  public queueEditKeyboard = (channel: Channel, message_id: string, keyboard: Keyboard) => {
    chatQueue.add("", { channel, message_id, action: Actions.EditKeyboard, chat: channel.chat, keyboard }, {});
  };

  public editMessage = async (channel: Channel, message_id: string, message: string, keyboard?: Keyboard) => {
    await this.call(
      "editMessageText",
      { chat_id: channel.chat, message_id, text: message, reply_markup: keyboard },
      { channel, retries: 3, content: message },
    );
  };

  public queueEditMessage = (channel: Channel, message_id: string, message: string, keyboard: Keyboard) => {
    chatQueue.add("", { channel, message_id, action: "editMessage", chat: channel.chat, message, keyboard }, {});
  };

  /** Not retried: Telegram rejects an answer that comes late. */
  public answerCallback = async (callback_query_id: string, text: string) => {
    await this.call("answerCallbackQuery", { callback_query_id, text });
  };

  getUsername = (): string | undefined => this.telegramBotUser?.username;
  getId = (): number | undefined => this.telegramBotUser?.id;

  private getName = (): string => {
    if (this.telegramBotUser) {
      if (this.telegramBotUser.last_name) {
        return `${this.telegramBotUser.first_name} ${this.telegramBotUser.last_name}`;
      } else {
        return this.telegramBotUser.first_name;
      }
    }
    return "No Name";
  };

  private introduceYourself = () => {
    console.log(
      `Hello, my name is ${this.getName()}. You can talk to me through my username: @${this.telegramBotUser!.username}`,
    );
  };

  public reset = async () => {
    await this.call("setWebhook", { url: "" });
    await this.call("getUpdates", { offset: -5 });
    await this.init();
  };

  public setCommands = async (channel: Channel, language: string) => {
    const commands = [
      Command.List,
      Command.Hint,
      Command.Minigame,
      Command.Tinygame,
      Command.Minihint,
      Command.Tinyhint,
      Command.Skip,
      Command.Miniskip,
      Command.Tinyskip,
      Command.Commands,
      Command.Me,
      Command.Stats,
    ].map((command) => ({
      command: i18n(language, `commands.${command}.name`),
      description: i18n(language, `commands.${command}.description`),
    }));
    await this.call(
      "setMyCommands",
      { commands, scope: { type: "chat", chat_id: channel.chat } },
      { channel, retries: 1 },
    );
  };

  private toDomainUser = (from: TelegramUser) => ({
    ...from,
    name: maskUrls(from.username ? `@${from.username}` : `${from.first_name} ${from.last_name ? from.last_name : ""}`),
  });

  public toDomainMessage = async (body: any): Promise<{ messageType: TelegramMessageType; message?: UserInput }> => {
    if (body.object === "page") {
      return { messageType: TelegramMessageType.Ignore };
    }
    if (body.message || body.callback_query) {
      const from = this.toDomainUser(body.message ? body.message.from : body.callback_query.from);
      if (from.id !== parseInt(process.env.MASTER_CHAT || "") && (await redis.get("pause")) === "true")
        return { messageType: TelegramMessageType.Ignore };
      if (BANNED_TELEGRAM_USERS.indexOf(from.id) >= 0) {
        return { messageType: TelegramMessageType.Ignore };
      }
      if (checkSpam(body)) {
        return { messageType: TelegramMessageType.Ignore };
      }
      if (body.callback_query) {
        const data = JSON.parse(body.callback_query.data);
        return {
          messageType: TelegramMessageType.Callback,
          message: {
            from,
            chatId: body.callback_query.message.chat.id,
            id: body.callback_query.message.message_id,
            callbackQueryId: body.callback_query.id,
            text: body.callback_query.message.text,
            type: data.type,
            data: data.id,
          },
        };
      }
      if (!body.message.text) {
        if (body.message.group_chat_created) {
          return {
            messageType: TelegramMessageType.NewGame,
            message: {
              id: body.message.message_id,
              from,
              command: Command.Commands,
              chatId: body.message.chat.id,
              telegramTopicId: body.message.message_thread_id,
              text: "",
            },
          };
        } else if (body.message.left_chat_participant) {
          return {
            messageType: TelegramMessageType.PlayerLeft,
            message: {
              id: body.message.message_id,
              from: { ...from, id: body.message.left_chat_participant.id },
              chatId: body.message.chat.id,
              text: "",
            },
          };
        }
      } else {
        let command = body.message.text.substring(
          0,
          !body.message.text.includes(" ") ? body.message.text.length : body.message.text.indexOf(" "),
        );
        let text;
        if (command.includes("@") && command.substring(command.indexOf("@") + 1) !== "TenThings_Bot") {
          return { messageType: TelegramMessageType.Ignore };
        } else if (command.includes("@") && command.substring(command.indexOf("@") + 1) === "TenThings_Bot") {
          command = command.substring(0, command.indexOf("@"));
        }
        command = command.toLowerCase();
        command = command.startsWith("/") ? command.replace("/", "") : undefined;
        if (command) {
          text = body.message.text.substring(command.length + 2, body.message.text.length);
          if (parseInt(process.env.MASTER_CHAT ?? "") === body.message.from.id)
            console.log(styleText("blue", String(body.message.chat.id)), command, text);
          if (text === "TenThings_Bot") text = "";
        } else {
          text = body.message.text;
        }
        return {
          messageType: TelegramMessageType.Message,
          message: {
            id: body.message.message_id,
            from,
            command,
            chatId: body.message.chat.id,
            telegramTopicId: body.message.message_thread_id,
            text,
          },
        };
      }
    } else if (body.chat_member) {
      if (body.chat_member.chat.id === parseInt(process.env.GROUP_CHAT || "")) {
        if (body.chat_member.new_chat_member.user.first_name !== body.chat_member.old_chat_member.user.first_name) {
          this.sendMessage(
            body.chat_member,
            `${body.chat_member.old_chat_member.user.first_name} updated their name to ${body.chat_member.new_chat_member.user.first_name}`,
          );
          this.notifyAdmin(`Name change: ${body.chat_member.new_chat_member.user}`);
        }
      }
    }
    return { messageType: TelegramMessageType.Ignore };
  };
}

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!);

enum Actions {
  SendMessage = "sendMessage",
  SendRichMessage = "sendRichMessage",
  EditKeyboard = "editKeyboard",
  EditMessage = "editMessage",
}

type QueueData =
  | { channel: Channel; action: Actions.SendMessage; message: string }
  | { channel: Channel; action: Actions.SendRichMessage; html: string }
  | { channel: Channel; action: Actions.EditKeyboard; message_id: string; keyboard: Keyboard }
  | { channel: Channel; action: Actions.EditMessage; message_id: string; message: string; keyboard?: Keyboard };

chatQueue.process(async ({ data }: { data: QueueData }) => {
  globalQueue.add("", data, {});
});

globalQueue.process(async ({ data }: { data: QueueData }) => {
  switch (data.action) {
    case "sendMessage":
      bot.sendMessage(data.channel, data.message);
      break;
    case "sendRichMessage":
      bot.sendRichMessage(data.channel, data.html);
      break;
    case "editKeyboard":
      bot.editKeyboard(data.channel, data.message_id, data.keyboard!);
      break;
    case "editMessage":
      bot.editMessage(data.channel, data.message_id, data.message, data.keyboard);
      break;
    default:
      break;
  }
});

export default bot;
