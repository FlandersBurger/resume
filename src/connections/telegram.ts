import { AxiosError } from "axios";

import Queue, { Job } from "bull";
import i18n from "@root/i18n";
import redis from "@root/queue";
import httpClient from "@root/http-client";
import { chatNotFound, botMuted, noTopic } from "@tenthings/errors";
import { checkSpam } from "@tenthings/spam";
import { MessageType } from "@tenthings/main";
import { parseSymbols, maskUrls } from "@root/utils/string-helpers";
import { UserInput } from "@tenthings/messages";
import moment, { Moment } from "moment";

const BANNED_TELEGRAM_USERS = [1726294650, 6758829541];

const messageQueue = new Queue("sendMessage", {
  redis: {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: "localhost",
    password: process.env.REDIS_PASSWORD,
  },
  limiter: {
    max: 28,
    duration: 1000,
  },
});

messageQueue.on("completed", function (job: Job) {
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

class TelegramBot {
  private baseUrl: string;
  private telegramBotUser: TelegramUser | undefined;
  private muteReasons: string[] = [
    "Bad Request: not enough rights to send text messages to the chat",
    "Bad Request: chat not found",
    "Bad Request: TOPIC_CLOSED",
    "Bad Request: CHAT_WRITE_FORBIDDEN",
    "Bad Request: CHAT_SEND_PLAIN_FORBIDDEN",
    "Forbidden: bot is not a member of the supergroup chat",
    "Forbidden: bot was kicked from the supergroup chat",
    "Forbidden: bot was kicked from the group chat",
    "Forbidden: bot was blocked by the user",
    "Forbidden: the group chat was deleted",
    "Forbidden: user is deactivated",
  ];
  private ignoreReasons: string[] = [
    "Bad Request: group chat was upgraded to a supergroup chat",
    "Bad Request: not enough rights to send animations to the chat",
    "Bad Request: message to delete not found",
    "Bad Request: message to edit not found",
    "Bad Request: query is too old and response timeout expired or query ID is invalid",
    "Bad Request: message is not modified: specified new message content and reply markup are exactly the same as a specified new message content and reply markup are exactly the same as a current content and reply markup of the message",
    "Bad Request: message is not modified: specified new message content and reply markup are exactly the same as a current content and reply markup of the message",
  ];
  private paused: boolean = false;
  private timeoutUntil: Moment | undefined;

  constructor(token: string) {
    this.baseUrl = `https://api.telegram.org/bot${token}`;
    this.init();
  }

  private init = async () => {
    const { data } = await httpClient().get(`${this.baseUrl}/getMe`);
    this.telegramBotUser = data.result;
    this.introduceYourself();
    this.resumeQueue();
  };

  private errorHandler = (channel: Channel, source: string, error: any, message?: string) => {
    const reason = error?.response?.data?.description;

    if (reason) {
      if (this.muteReasons.includes(reason)) {
        botMuted(channel.chat);
      } else if (reason.includes("too long")) {
        if (message) {
          this.notifyAdmin(`Too long: ${message.substring(0, 500)}...`);
        }
      } else if (reason.includes("Bad Request: message thread not found")) {
        this.notifyAdmin(`Topic ${channel.topic} for channel ${channel.chat} not found`);
        noTopic(channel.chat);
      } else if (reason.includes("can't parse")) {
        this.notifyAdmin(`Send Message to ${channel} parse Fail: ${message}`);
      } else if (error.response.data.description.startsWith("Too Many Requests: retry after ")) {
        if (!this.paused) {
          this.paused = true;
          const timeout = parseInt(error.response.data.description.match(/retry after (\d+)/)![1]);
          this.timeoutUntil = moment().add(timeout, "seconds");
          messageQueue.pause();
          this.notifyAdmin(`Pausing queue for ${timeout} seconds due to too many requests`);
          setTimeout(this.resumeQueue, timeout * 1000);
        }
        if (message) this.queueMessage(channel, message);
      } else if (
        error.response?.data?.description ===
        `Bad Request: invalid file HTTP URL specified: Wrong port number specified in the URL`
      ) {
        this.notifyAdmin(`Invalid URL for ${source} in ${channel}: ${message}`);
      } else if (!this.ignoreReasons.includes(reason)) {
        bot.notifyAdmin(`Error from "${source}" in channel ${channel.chat}:\n${parseSymbols(reason)}`);
      }
    } else {
      bot.notifyAdmin(
        `Unknown error from "${source}" in channel ${channel.chat}\nCode:${parseSymbols(error.code)}\nMessage:${parseSymbols(error.message)}`,
      );
      console.error(`${source} error`, error);
    }
  };

  public setWebhook = async (api: string): Promise<any> => {
    //var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
    const allowed_updates = JSON.stringify(["message", "callback_query", "chat_member"]);
    const url = `${this.baseUrl}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
    try {
      return await httpClient().get(url);
    } catch (error: AxiosError | any) {
      this.notifyAdmin("Set Webhook Fail");
      console.error(error.response.data);
    }
  };

  public getWebhook = async () => {
    const url = `${this.baseUrl}/getWebhookInfo`;
    try {
      const { data } = await httpClient().get(url);
      return data.result;
    } catch (error: AxiosError | any) {
      this.notifyAdmin("Get Webhook Fail");
      console.error(error.response.data);
    }
    return;
  };

  public deleteWebhook = async () => {
    const url = `${this.baseUrl}/deleteWebhook`;
    try {
      await httpClient().get(url);
    } catch (error: AxiosError | any) {
      this.notifyAdmin("Delete Webhook Fail");
      console.error(error.response.data);
    }
  };

  public sendMessage = async (
    channel: Channel,
    message: string,
    options: { replyMessageId?: string; replyMarkup?: ReplyMarkup } = {},
    retries: number = 0,
  ) => {
    const { replyMessageId, replyMarkup } = options;
    message = encodeURIComponent(message);
    let url = `${this.baseUrl}/sendMessage?chat_id=${channel.chat}&disable_notification=true&parse_mode=html&text=${message}`;
    if (channel.topic) url += `&message_thread_id=${channel.topic}`;
    if (replyMessageId) {
      url += `&reply_markup=${JSON.stringify({ force_reply: true, selective: true })}`;
      url += `&reply_parameters=${JSON.stringify({ message_id: replyMessageId, allow_sending_without_reply: true })}`;
    }
    if (replyMarkup) url += `&reply_markup=${JSON.stringify(replyMarkup)}`;
    httpClient()
      .get(url)
      .catch((error) => {
        if (error.response) {
          if (error.response.data.description === "Bad Gateway") {
            if (retries < 3) {
              setTimeout(() => this.sendMessage(channel, message, options, retries++), retries * 500);
            } else {
              this.errorHandler(channel, "Send message (failed 3 times)", error, message);
            }
          } else this.errorHandler(channel, "Send message", error, message);
        } else {
          if (channel.chat !== parseInt(process.env.MASTER_CHAT || "")) {
            this.errorHandler(channel, "Send message", error);
          }
        }
      });
  };

  public deleteMessage = async (channel: Channel, message_id: string) => {
    const url = `${this.baseUrl}/deleteMessage?chat_id=${channel.chat}&message_id=${message_id}`;
    try {
      await httpClient().get(url);
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Delete message", error);
    }
  };

  public queueMessage = async (channel: Channel, message: string) => {
    messageQueue.add("", { channel, message, action: "sendMessage" }, {});
    if (this.timeoutUntil && moment().isAfter(this.timeoutUntil) && (await messageQueue.isPaused())) {
      this.resumeQueue();
    }
  };

  private resumeQueue = async () => {
    messageQueue.resume();
    this.paused = false;
    this.timeoutUntil = undefined;
  };

  public getQueueCount = async (): Promise<number> => {
    return await messageQueue.count();
  };

  public kick = async (channel: Channel, userId: number, minutes: number) => {
    if (!minutes) minutes = 1;
    let date = new Date();
    const untilDate = Math.floor(date.setTime(date.getTime() + minutes * 60 * 1000) / 1000);
    const url = `${this.baseUrl}/kickChatMember?chat_id=${channel.chat}&user_id=${userId}&until_date=${untilDate}`;
    try {
      await httpClient().get(url);
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Kick user", error);
    }
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
    if (keyboard) await this.sendKeyboard({ chat: parseInt(process.env.ADMIN_CHAT || "") }, msg, keyboard);
    else await this.queueMessage({ chat: parseInt(process.env.ADMIN_CHAT || "") }, msg);
  };

  public broadcast = async (channels: Channel[], message: string) => {
    await this.notifyAdmin(`Starting broadcast to ${channels.length} chats`);
    channels.forEach((channel: Channel, index) => {
      setTimeout(() => {
        this.queueMessage(channel, message);
        if (index === channels.length - 1) {
          this.notifyAdmin("Broadcast finished");
        }
      }, index * 100);
    });
  };

  public exportChatInviteLink = async (channel: Channel) => {
    const url = `${this.baseUrl}/exportChatInviteLink?chat_id=${channel.chat}`;
    try {
      const { data } = await httpClient().get(encodeURI(url));
      return data.result;
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Export chat invite link", error);
    }
  };

  public getChat = async (channel: Channel): Promise<string> => {
    const url = `${bot.baseUrl}/getChat?chat_id=${channel.chat}`;
    try {
      const { data } = await httpClient().get(encodeURI(url));
      if (data.result.invite_link) return `Group Chat: ${data.result.invite_link}`;
      else if (data.result.title) return `Group Chat: ${data.result.title}`;
      else if (data.result.username) return `Private Chat: @${data.result.username}`;
      else if (data.result.first_name) return `Private Chat: ${data.result.first_name}`;
      else if (data.result.type === "private") return `Private Chat`;
    } catch (error: any) {
      if (error.response.data.error_code === 400) {
        chatNotFound(channel.chat);
      } else {
        this.errorHandler(channel, "Get chat", error);
      }
      return `Chat not found: ${channel} - ${error.response.data.error_code}`;
    }
    return "";
  };

  public getChatMember = async (channel: Channel, userId: number) => {
    const url = `${this.baseUrl}/getChatMember?chat_id=${channel.chat}&user_id=${userId}`;
    try {
      const response = await httpClient().get(url);
      return (
        response &&
        response.data &&
        response.data.result &&
        !["restricted", "left", "kicked"].includes(response.data.result.status)
      );
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Get chat member", error);
    }
  };

  public checkAdmin = async (channel: Channel, userId: number) => {
    if (userId === parseInt(process.env.MASTER_CHAT || "")) return true;
    if (channel.chat > 0) return true;
    const url = `${this.baseUrl}/getChatMember?chat_id=${channel.chat}&user_id=${userId}`;
    try {
      const response = await httpClient().get(url);
      return (
        response &&
        response.data &&
        response.data.result &&
        ["creator", "administrator"].includes(response.data.result.status)
      );
    } catch (error: AxiosError | any) {
      if (error.response.data.description === "Bad Request: CHAT_ADMIN_REQUIRED") {
        return true;
      }
      this.errorHandler(channel, "Check admin", error);
    }
  };

  public sendKeyboard = async (channel: Channel, message: string, keyboard: Keyboard) => {
    this.sendMessage(channel, message.replace("&", "and"), { replyMarkup: keyboard });
  };

  public sendPhoto = async (channel: Channel, photo: string) => {
    let url = `${this.baseUrl}/sendPhoto?chat_id=${channel.chat}&photo=${photo}`;
    if (channel.topic) url += `&message_thread_id=${channel.topic}`;
    try {
      await httpClient().get(encodeURI(url));
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Send photo", error, photo);
    }
  };

  public sendAnimation = async (channel: Channel, animation: string) => {
    let url = `${this.baseUrl}/sendAnimation?chat_id=${channel.chat}&animation=${animation}`;
    if (channel.topic) url += `&message_thread_id=${channel.topic}`;
    try {
      await httpClient().get(encodeURI(url));
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Send animation", error, animation);
    }
  };

  public editKeyboard = async (channel: Channel, message_id: string, keyboard: Keyboard) => {
    let url = `${this.baseUrl}/editMessageReplyMarkup?chat_id=${channel.chat}&message_id=${message_id}`;
    if (keyboard) url += `&reply_markup=${JSON.stringify(keyboard)}`;
    console.log(url);
    try {
      await httpClient().get(encodeURI(url));
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Edit keyboard", error);
    }
  };

  public queueEditKeyboard = (channel: Channel, message_id: string, keyboard: Keyboard) => {
    console.log(channel);
    messageQueue.add("", { channel, message_id, action: "editKeyboard", keyboard }, {});
  };

  public answerCallback = async (callback_query_id: string, text: string) => {
    const url = `${this.baseUrl}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
    try {
      await httpClient().get(encodeURI(url));
    } catch (error: AxiosError | any) {
      this.errorHandler({ chat: 0 }, "Answer callback", error);
    }
  };

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
    await httpClient().get(`${this.baseUrl}/setWebhook?url=`);
    await httpClient().get(`${this.baseUrl}/getUpdates?offset=-5`);
    await this.init();
  };

  public setCommands = async (channel: Channel, language: string) => {
    const commands = [
      "list",
      "hint",
      "minigame",
      "tinygame",
      "minihint",
      "tinyhint",
      "skip",
      "miniskip",
      "tinyskip",
      "commands",
      "me",
      "stats",
    ].map((command) => ({
      command: command,
      description: i18n(language, `commands.${command}.description`),
    }));
    const scope = {
      type: "chat",
      chat_id: channel.chat,
    };
    const url = `${this.baseUrl}/setMyCommands?commands=${JSON.stringify(commands)}&scope=${JSON.stringify(scope)}`;
    try {
      await httpClient().get(encodeURI(url));
    } catch (error: AxiosError | any) {
      this.errorHandler(channel, "Set commands", error);
    }
  };

  private toDomainUser = (from: TelegramUser) => ({
    ...from,
    name: maskUrls(from.username ? `@${from.username}` : `${from.first_name} ${from.last_name ? from.last_name : ""}`),
  });

  public toDomainMessage = async (body: any): Promise<{ messageType: MessageType; message?: UserInput }> => {
    if (body.object === "page") {
      return { messageType: MessageType.Ignore };
    }
    if (body.message || body.callback_query) {
      const from = this.toDomainUser(body.message ? body.message.from : body.callback_query.from);
      if (from.id !== parseInt(process.env.MASTER_CHAT || "") && (await redis.get("pause")) === "true")
        return { messageType: MessageType.Ignore };
      if (BANNED_TELEGRAM_USERS.indexOf(from.id) >= 0) {
        return { messageType: MessageType.Ignore };
      }
      if (checkSpam(body)) {
        return { messageType: MessageType.Ignore };
      }
      if (body.callback_query) {
        const data = JSON.parse(body.callback_query.data);
        return {
          messageType: MessageType.Callback,
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
            messageType: MessageType.NewGame,
            message: {
              id: body.message.message_id,
              from,
              command: "info",
              chatId: body.message.chat.id,
              topicId: body.message.message_thread_id,
              text: "",
            },
          };
        } else if (body.message.left_chat_participant) {
          return {
            messageType: MessageType.PlayerLeft,
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
          return { messageType: MessageType.Ignore };
        } else if (command.includes("@") && command.substring(command.indexOf("@") + 1) === "TenThings_Bot") {
          command = command.substring(0, command.indexOf("@"));
        }
        command = command.toLowerCase();
        command = command.startsWith("/") ? command.replace("/", "") : undefined;
        if (command) {
          text = body.message.text.substring(command.length + 1, body.message.text.length);
          if (text === "TenThings_Bot") text = "";
        } else {
          text = body.message.text;
        }
        return {
          messageType: MessageType.Message,
          message: {
            id: body.message.message_id,
            from,
            command,
            chatId: body.message.chat.id,
            topicId: body.message.message_thread_id,
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
    return { messageType: MessageType.Ignore };
  };
}

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN!);

enum Actions {
  SendMessage = "sendMessage",
  EditKeyboard = "editKeyboard",
}

messageQueue.process(
  async ({
    data,
  }: {
    data:
      | { channel: Channel; action: Actions.SendMessage; message: string }
      | { channel: Channel; action: Actions.EditKeyboard; message_id: string; keyboard: Keyboard };
  }) => {
    switch (data.action) {
      case "sendMessage":
        bot.sendMessage(data.channel, data.message);
        break;
      case "editKeyboard":
        bot.editKeyboard(data.channel, data.message_id, data.keyboard!);
        break;
      default:
        break;
    }
  },
);

export default bot;
