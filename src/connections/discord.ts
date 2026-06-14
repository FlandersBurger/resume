import {
  Client,
  GatewayIntentBits,
  Message,
  Partials,
  TextChannel,
  Events,
  REST,
  Routes,
  Interaction,
} from "discord.js";
import Queue, { Job } from "bull";
import redis from "@root/queue";
import { maskUrls } from "@utils/string-helpers";
import chalk from "chalk";

export type DiscordUser = {
  id: string;
  username: string;
  displayName: string;
  bot: boolean;
};

export type DiscordChannel = {
  channelId: string;
};

export type DiscordMessage = {
  id: string;
  from: DiscordUser;
  command?: string;
  text: string;
  channelId: string;
};

export enum DiscordMessageType {
  Command = "command",
  NewGame = "newGame",
  Message = "message",
  Ignore = "ignore",
}

const globalQueue = new Queue("discordSendMessage", {
  redis: {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST || "localhost",
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    password: process.env.REDIS_PASSWORD,
  },
  limiter: {
    max: 50,
    duration: 1000,
  },
});

const chatQueue = new Queue("discordQueueMessage", {
  redis: {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST || "localhost",
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    password: process.env.REDIS_PASSWORD,
  },
  limiter: {
    max: 5,
    duration: 5000,
    groupKey: "discordChat",
  },
});

globalQueue.on("completed", function (job: Job) {
  job.remove();
});

chatQueue.on("completed", function (job: Job) {
  job.remove();
});

type MessageHandler = (message: DiscordMessage) => Promise<void>;

const slashCommands = [
  { name: "ping", description: "Check if the bot is alive" },
  { name: "start", description: "Start the game" },
  { name: "stop", description: "Stop the game" },
  { name: "list", description: "Show the current list" },
  { name: "lists", description: "Show upcoming lists in queue" },
  { name: "skip", description: "Skip the current list" },
  { name: "veto", description: "Veto a skip" },
  { name: "hint", description: "Get a hint for the main game" },
  { name: "minigame", description: "Show the minigame" },
  { name: "minihint", description: "Get a hint for the minigame" },
  { name: "miniskip", description: "Skip the minigame" },
  { name: "tinygame", description: "Show the tinygame" },
  { name: "tinyhint", description: "Get a hint for the tinygame" },
  { name: "tinyskip", description: "Skip the tinygame" },
  { name: "score", description: "Show daily scores" },
  { name: "me", description: "Show top 10 scores" },
  { name: "categories", description: "Show and manage categories" },
  { name: "stats", description: "Show game statistics" },
  { name: "intro", description: "Show introduction" },
  { name: "logic", description: "Show game rules" },
  { name: "help", description: "Show available commands" },
  {
    name: "search",
    description: "Search for a list to add to the queue",
    options: [{ type: 3, name: "text", description: "Search term", required: true }],
  },
  {
    name: "error",
    description: "Report an error",
    options: [{ type: 3, name: "text", description: "Description", required: false }],
  },
];

class DiscordBot {
  private client: Client;
  private token: string;
  private messageHandler: MessageHandler | null = null;

  constructor(token: string) {
    this.token = token;
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
      ],
      partials: [Partials.Channel, Partials.Message],
    });

    this.client.once(Events.ClientReady, async (readyClient) => {
      console.log(chalk.blue(`Discord bot ready: ${readyClient.user.tag}`));
      const appId = process.env.DISCORD_APP_ID;
      if (appId) {
        await this.registerCommands(appId);
      }
    });

    this.client.on(Events.InteractionCreate, async (interaction: Interaction) => {
      if (!interaction.isChatInputCommand()) return;
      if ((await redis.get("pause")) === "true") return;

      await interaction.deferReply({ ephemeral: true });

      const domainMessage: DiscordMessage = {
        id: interaction.id,
        from: {
          id: interaction.user.id,
          username: maskUrls(interaction.user.username),
          displayName: maskUrls(interaction.user.displayName),
          bot: interaction.user.bot,
        },
        command: interaction.commandName,
        text: interaction.options.getString("text") ?? "",
        channelId: interaction.channelId,
      };

      if (this.messageHandler) {
        await this.messageHandler(domainMessage);
      }

      await interaction.deleteReply();
    });

    this.client.on(Events.MessageCreate, async (message: Message) => {
      if (message.author.bot) return;
      if ((await redis.get("pause")) === "true") return;

      const domainMessage = this.toDomainMessage(message);
      if (domainMessage && this.messageHandler) {
        await this.messageHandler(domainMessage);
      }
    });

    globalQueue.process(async (job: Job) => {
      await this.doSendMessage(job.data.channelId, job.data.message);
    });

    chatQueue.process(async (job: Job) => {
      await this.doSendMessage(job.data.channelId, job.data.message);
    });

    globalQueue.on("failed", function (_job: Job, error: any) {
      console.error("Discord global queue error:", error);
    });
    chatQueue.on("failed", function (_job: Job, error: any) {
      console.error("Discord chat queue error:", error);
    });

    this.client.login(token).catch((error) => {
      console.error("Discord login failed:", error);
    });
  }

  public onMessage = (handler: MessageHandler) => {
    this.messageHandler = handler;
  };

  private registerCommands = async (appId: string) => {
    const rest = new REST().setToken(this.token);
    await rest.put(Routes.applicationCommands(appId), { body: slashCommands });
    console.log(chalk.blue(`Discord slash commands registered (${slashCommands.length})`));
  };

  private toDomainUser = (author: Message["author"]): DiscordUser => ({
    id: author.id,
    username: maskUrls(author.username),
    displayName: maskUrls(author.displayName),
    bot: author.bot,
  });

  public toDomainMessage = (message: Message): DiscordMessage | null => {
    const content = message.content.trim();
    if (!content) return null;

    let command: string | undefined;
    let text = content;

    if (content.startsWith("/")) {
      const parts = content.split(/\s+/);
      command = parts[0].slice(1).toLowerCase();
      text = parts.slice(1).join(" ");
    }

    return {
      id: message.id,
      from: this.toDomainUser(message.author),
      command,
      text,
      channelId: message.channelId,
    };
  };

  private doSendMessage = async (channelId: string, message: string) => {
    try {
      const channel = await this.client.channels.fetch(channelId);
      if (channel && channel.isTextBased()) {
        // Strip HTML tags used by Telegram parser and convert to Discord markdown
        const discordMessage = this.htmlToMarkdown(message);
        // Discord has a 2000 char limit per message
        if (discordMessage.length <= 2000) {
          await (channel as TextChannel).send(discordMessage);
        } else {
          // Split into chunks
          const chunks = discordMessage.match(/[\s\S]{1,2000}/g) || [];
          for (const chunk of chunks) {
            await (channel as TextChannel).send(chunk);
          }
        }
      }
    } catch (error: any) {
      console.error(`Discord send message error in ${channelId}:`, error?.message);
    }
  };

  private htmlToMarkdown = (html: string): string => {
    return html
      .replace(/<b>([\s\S]*?)<\/b>/g, "**$1**")
      .replace(/<i>([\s\S]*?)<\/i>/g, "*$1*")
      .replace(/<u>([\s\S]*?)<\/u>/g, "__$1__")
      .replace(/<a href="[^"]*">&#8204;<\/a>/g, "") // invisible link (used for images in Telegram)
      .replace(/<a href="([^"]*)">([\s\S]*?)<\/a>/g, "[$2]($1)")
      .replace(/<[^>]+>/g, ""); // strip remaining tags
  };

  public sendMessage = async (channel: DiscordChannel, message: string) => {
    await this.doSendMessage(channel.channelId, message);
  };

  public queueMessage = async (channel: DiscordChannel, message: string) => {
    chatQueue.add("", { channelId: channel.channelId, message, chat: channel.channelId }, {});
  };

  public deleteMessage = async (channelId: string, messageId: string) => {
    try {
      const channel = await this.client.channels.fetch(channelId);
      if (channel && channel.isTextBased()) {
        const msg = await (channel as TextChannel).messages.fetch(messageId);
        await msg.delete();
      }
    } catch (error: any) {
      console.error(`Discord delete message error:`, error?.message);
    }
  };

  public notifyAdmin = async (msg: string) => {
    const adminChannelId = process.env.DISCORD_ADMIN_CHANNEL;
    if (adminChannelId) {
      await this.doSendMessage(adminChannelId, msg);
    } else {
      console.log(`[Discord Admin]: ${msg}`);
    }
  };

  public checkAdmin = async (guildId: string | null, userId: string): Promise<boolean> => {
    if (!guildId) return true; // DMs are treated as admin
    try {
      const guild = await this.client.guilds.fetch(guildId);
      const member = await guild.members.fetch(userId);
      return member.permissions.has("Administrator") || member.permissions.has("ManageGuild");
    } catch (error: any) {
      console.error("Discord checkAdmin error:", error?.message);
      return false;
    }
  };

  public getQueueCount = async (): Promise<number> => {
    return await globalQueue.count();
  };
}

const discordBot = new DiscordBot(process.env.DISCORD_TOKEN!);

export default discordBot;
