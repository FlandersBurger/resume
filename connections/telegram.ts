import axios from "axios";
import { Request, Response } from "express";

import Queue, { Job } from "bull";
import i18n from "../i18n";
import redis from "../redis";
import { chatNotFound } from "../controllers/bots/tenthings/errors";
import { checkSpam } from "../controllers/bots/tenthings/spam";
import { MessageType } from "../controllers/bots/tenthings/main";
import { IMessage, IMessageType } from "../controllers/bots/tenthings/messages";
import { ICallbackData } from "../controllers/bots/tenthings/callbacks";
import { maskUrls } from "../utils/string-helpers";

const config = require("../config");
const BANNED_TELEGRAM_USERS = [1726294650];

const TOKEN = config.tokens.telegram.tenthings;

const messageQueue = new Queue("sendMessage", {
  redis: {
    port: config.redis.port,
    host: "localhost",
    password: config.redis.password,
  },
  limiter: {
    max: 30,
    duration: 1000,
  },
});

messageQueue.on("completed", function (job: Job) {
  //Job finished we remove it]
  job.remove();
});

export interface ITelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  name?: string;
  language_code?: string;
}

export interface IKeyboardCallbackButton {
  text: string;
  callback_data: string;
}
export interface IKeyboardUrlButton {
  text: string;
  url: string;
}

export type IKeyboardButton = IKeyboardCallbackButton | IKeyboardUrlButton;

export interface IKeyboard {
  inline_keyboard: Array<Array<IKeyboardButton>>;
}

class TelegramBot {
  private baseUrl: string;
  private telegramBotUser: ITelegramUser | undefined;

  constructor(token: string) {
    this.baseUrl = `https://api.telegram.org/bot${token}`;
    this.init();
  }

  private init = async () => {
    const { data } = await axios.get(`${this.baseUrl}/getMe`);
    this.telegramBotUser = data.result;
    this.introduceYourself();
  };

  private setWebhook = async (api: string): Promise<any> => {
    //var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
    const allowed_updates = JSON.stringify(["message", "callback_query"]);
    const url = `${this.baseUrl}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
    try {
      return await axios.get(url);
    } catch (error) {
      this.notifyAdmin("Set Webhook Fail");
      console.error(error);
    }
  };

  public getWebhook = async () => {
    const url = `${this.baseUrl}/getWebhookInfo`;
    try {
      const { data } = await axios.get(url);
      return data.result;
    } catch (error) {
      this.notifyAdmin("Get Webhook Fail");
      console.error(error);
    }
  };

  public deleteWebhook = async () => {
    const url = `${this.baseUrl}/deleteWebhook`;
    try {
      return await axios.get(url);
    } catch (error) {
      this.notifyAdmin("Delete Webhook Fail");
      console.error(error);
    }
  };

  public sendMessage = (channel: string, message: string, topic?: number) => {
    message = encodeURIComponent(message);
    let url = `${this.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}`;
    if (topic) url += `&message_thread_id=${topic}`;
    try {
      axios.get(url);
    } catch (error) {
      this.notifyAdmin(`Send Message to ${channel} Fail`);
      console.error(error);
    }
  };

  public deleteMessage = async (channel: string, message_id: string) => {
    const url = `${this.baseUrl}/deleteMessage?chat_id=${channel}&message_id=${message_id}`;
    try {
      await axios.get(url);
    } catch (error) {
      this.notifyAdmin(`Delete Message in ${channel} Fail`);
      console.error(error);
    }
  };

  public queueMessage = (channel: string, message: string) => {
    messageQueue.add("", { channel, message }, {});
  };

  public getQueueCount = async (): Promise<number> => {
    return await messageQueue.count();
  };

  public kick = async (channel: string, userId: number, minutes: number) => {
    if (!minutes) minutes = 1;
    let date = new Date();
    const untilDate = Math.floor(date.setTime(date.getTime() + minutes * 60 * 1000) / 1000);
    const url = `${this.baseUrl}/kickChatMember?chat_id=${channel}&user_id=${userId}&until_date=${untilDate}`;
    try {
      await axios.get(url);
    } catch (error) {
      bot.notifyAdmin(`Kick user ${userId} Fail in ${channel}`);
      console.error(error);
    }
  };

  public notifyCosmicForce = async (msg: string, keyboard?: IKeyboard) => {
    if (keyboard) await this.sendKeyboard(config.cosmicForceChat, msg, keyboard, 17);
    else await this.sendMessage(config.cosmicForceChat, msg, 17);
  };

  public notifyAdmin = async (msg: string) => {
    await this.queueMessage(config.masterChat, msg);
  };

  public notify = async (msg: string) => {
    await this.queueMessage(config.noticeChannel, msg);
  };

  public notifyAdmins = async (msg: string, keyboard?: IKeyboard) => {
    if (keyboard) await this.sendKeyboard(config.adminChat, msg, keyboard);
    else await this.queueMessage(config.adminChat, msg);
  };

  public broadcast = async (channels: string[], message: string) => {
    await this.notifyAdmin(`Starting broadcast to ${channels.length} chats`);
    channels.forEach((channel: string, index) => {
      setTimeout(() => {
        this.queueMessage(channel, message);
        if (index === channels.length - 1) {
          this.notifyAdmin("Broadcast finished");
        }
      }, index * 50);
    });
  };

  public exportChatInviteLink = async (channel: string) => {
    const url = `${this.baseUrl}/exportChatInviteLink?chat_id=${channel}`;
    try {
      const { data } = await axios.get(encodeURI(url));
      return data.result;
    } catch (error) {
      this.notifyAdmin(`Get Invite Link to ${channel} Fail`);
      console.error(error);
    }
  };

  public getChat = async (channel: string): Promise<string> => {
    const url = `${bot.baseUrl}/getChat?chat_id=${channel}`;
    try {
      const { data } = await axios.get(encodeURI(url));
      if (data.result.invite_link) return `Group Chat: ${data.result.invite_link}`;
      else if (data.result.title) return `Group Chat: ${data.result.title}`;
      else if (data.result.username) return `Private Chat: @${data.result.username}`;
      else if (data.result.first_name) return `Private Chat: ${data.result.first_name}`;
      else if (data.result.type === "private") return `Private Chat`;
    } catch (error: any) {
      this.notifyAdmin(`Get Chat ${channel} Fail`);
      if (error.response.data.error_code === 400) {
        chatNotFound(channel);
      } else {
        console.error(error);
      }
      return `Chat not found: ${channel} - ${error.response.data.error_code}`;
    }
    return "";
  };

  public getChatMember = async (channel: string, userId: number) => {
    const url = `${this.baseUrl}/getChatMember?chat_id=${channel}&user_id=${userId}`;
    try {
      const response = await axios.get(url);
      return (
        response &&
        response.data &&
        response.data.result &&
        !["restricted", "left", "kicked"].includes(response.data.result.status)
      );
    } catch (error) {
      this.notifyAdmin(`Get Chat Member ${userId} of ${channel} Fail`);
      console.error(error);
    }
  };

  public checkAdmin = async (channel: string, userId: number) => {
    const url = `${this.baseUrl}/getChatMember?chat_id=${channel}&user_id=${userId}`;
    try {
      const response = await axios.get(url);
      return (
        response &&
        response.data &&
        response.data.result &&
        ["creator", "administrator"].includes(response.data.result.status)
      );
    } catch (error) {
      this.notifyAdmin(`Check Admin in ${channel} Fail`);
      console.error(error);
    }
  };
  public sendKeyboard = async (channel: string, message: string, keyboard: IKeyboard, topic?: number) => {
    let url = `${this.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html`;
    url += `&text=${message}`;
    url += `&reply_markup=${JSON.stringify(keyboard)}`;
    if (topic) url += `&message_thread_id=${topic}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      this.notifyAdmin(`Send Keyboard to ${channel} Fail`);
      console.error(error);
    }
  };
  public sendPhoto = async (channel: string, photo: string) => {
    const url = `${this.baseUrl}/sendPhoto?chat_id=${channel}&photo=${photo}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      this.notifyAdmin(`Send Photo to ${channel} Fail`);
      console.error(error);
    }
  };
  public sendAnimation = async (channel: string, animation: string) => {
    const url = `${this.baseUrl}/sendAnimation?chat_id=${channel}&animation=${animation}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      this.notifyAdmin(`Send Animation to ${channel} Fail`);
      console.error(error);
    }
  };
  public editKeyboard = async (channel: string, message_id: string, keyboard: IKeyboard) => {
    let url = `${this.baseUrl}/editMessageReplyMarkup?chat_id=${channel}&message_id=${message_id}`;
    if (keyboard) url += `&reply_markup=${JSON.stringify(keyboard)}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      this.notifyAdmin(`Edit Keyboard in ${channel} Fail`);
      console.error(error);
    }
  };
  public answerCallback = async (callback_query_id: string, text: string) => {
    const url = `${this.baseUrl}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      this.notifyAdmin(`Answer Callback of ${callback_query_id} Fail`);
      console.error(error);
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
      `Hello, my name is ${this.getName()}. You can talk to me through my username: @${this.telegramBotUser!.username}`
    );
  };

  public reset = async () => {
    await axios.get(`${this.baseUrl}/setWebhook?url=`);
    await axios.get(`${this.baseUrl}/getUpdates?offset=-5`);
    await this.init();
  };

  public setCommands = async (channel: string, language: string) => {
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
      chat_id: channel,
    };
    const url = `${this.baseUrl}/setMyCommands?commands=${JSON.stringify(commands)}&scope=${JSON.stringify(scope)}`;
    try {
      await axios.get(encodeURI(url));
    } catch (error) {
      this.notifyAdmin("Set Commands Fail");
      console.error(error);
    }
  };

  private toDomainUser = (from: ITelegramUser) => ({
    ...from,
    name: maskUrls(from.username ? `@${from.username}` : `${from.first_name} ${from.last_name ? from.last_name : ""}`),
  });

  public toDomainMessage = async (body: any): Promise<{ messageType: MessageType; message?: IMessageType }> => {
    if (body.object === "page") {
      return { messageType: MessageType.Ignore };
    }
    if (body.message || body.callback_query) {
      const from = this.toDomainUser(body.message ? body.message.from : body.callback_query.from);
      if (from.id != config.masterChat && (await redis.get("pause")) === "true")
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
              command: "/info",
              chatId: body.message.chat.id,
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
          !body.message.text.includes(" ") ? body.message.text.length : body.message.text.indexOf(" ")
        );
        if (command.includes("@") && command.substring(command.indexOf("@") + 1) !== "TenThings_Bot") {
          return { messageType: MessageType.Ignore };
        }
        command = command.substring(0, command.indexOf("@"));
        command = command.toLowerCase();
        return {
          messageType: MessageType.Message,
          message: {
            id: body.message.message_id,
            from,
            command,
            chatId: body.message.chat.id,
            text: body.message.text,
          },
        };
      }
    }
    return { messageType: MessageType.Ignore };
  };
}

const bot = new TelegramBot(TOKEN);

messageQueue.process(({ data }: { data: { channel: string; message: string } }) =>
  bot.sendMessage(data.channel, data.message)
);

export default bot;
