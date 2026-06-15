import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { KeyboardDef } from "@tenthings/keyboards";

// ── Discord converter ─────────────────────────────────────────────────────────

// Discord limits messages to 5 ActionRows; silently truncates if keyboard exceeds this.
export const toDiscordComponents = (def: KeyboardDef): ActionRowBuilder<ButtonBuilder>[] =>
  def.slice(0, 5).map((row) =>
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      row.map((btn) => {
        const builder = new ButtonBuilder().setLabel(btn.label.slice(0, 80));
        if (btn.url) {
          return builder.setStyle(ButtonStyle.Link).setURL(btn.url);
        }
        const customId = btn.id ? `${btn.action}:${btn.id}` : btn.action;
        return builder
          .setCustomId(customId)
          .setStyle(btn.style === "danger" ? ButtonStyle.Danger : ButtonStyle.Secondary);
      }),
    ),
  );
