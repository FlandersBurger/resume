// Routes Engine Events to the renderer of the platform the Game is played on.

import type { Platform } from "@models/tenthings/game";
import type { Renderer } from "./rendering";

/** Loaded on first use: the renderers pull in the bot connections, which the Engine itself doesn't need. */
export const getRenderer = async (platform: Platform): Promise<Renderer | undefined> => {
  switch (platform) {
    case "telegram":
      return (await import("@tenthings/providers/telegram/renderer")).renderTelegram;
    case "discord":
      return (await import("@tenthings/providers/discord/renderer")).renderDiscord;
    default:
      // The web game doesn't send these Actions yet.
      return undefined;
  }
};
