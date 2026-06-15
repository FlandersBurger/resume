import { IList } from "@models/tenthings/list";
import { capitalize } from "@utils/string-helpers";
import { getFrequencyMessage } from "@tenthings/messages";
import emojis from "@tenthings/emojis";
import { Keyboard, KeyboardButton } from "@root/connections/telegram";
import { TelegramCallbackDataType } from "./callbacks";
import { KeyboardDef } from "@tenthings/keyboards";

// ── Telegram converter ─────────────────────────────────────────────────────────

// Maps canonical action names to their Telegram callback type strings where they differ
const TELEGRAM_ACTION: Record<string, string> = {
  confirmban: TelegramCallbackDataType.ConfirmBan,
  statsopt: TelegramCallbackDataType.StatOptions,
  botlang: TelegramCallbackDataType.BotLanguage,
  subcat: TelegramCallbackDataType.Subcategory,
  trivialang: TelegramCallbackDataType.TriviaLanguages,
};

const toTelegramCallbackData = (action: string, id = ""): string => {
  if (action === "vote") {
    // Canonical id uses ":" (e.g. "1:listId"); Telegram vote handler splits on "_"
    return JSON.stringify({ type: TelegramCallbackDataType.Vote, id: id.replace(":", "_") });
  }
  if (action === "delay") {
    // Canonical id is "delayType:value"; Telegram uses the delay type as the callback type
    const sep = id.indexOf(":");
    return JSON.stringify({ type: id.slice(0, sep), id: id.slice(sep + 1) });
  }
  return JSON.stringify({ type: TELEGRAM_ACTION[action] ?? action, id });
};

export const toTelegramKeyboard = (def: KeyboardDef): Keyboard => ({
  inline_keyboard: def.map((row) =>
    row.map(
      (btn): KeyboardButton =>
        btn.url
          ? ({ text: btn.label, url: btn.url } as KeyboardButton)
          : { text: btn.label, callback_data: toTelegramCallbackData(btn.action, btn.id) },
    ),
  ),
});

// ── Telegram-only: list curation keyboard (admin panel) ───────────────────────

export const curateListKeyboard = (list: IList): Keyboard => ({
  inline_keyboard: [
    [
      {
        text: `${emojis.thumbsUp} (${list.votes ? list.votes.filter(({ vote }) => vote > 0).length : 0})`,
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Vote, id: `1_${list._id}` }),
      },
      {
        text: `${emojis.thumbsDown} (${list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0})`,
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Vote, id: `-1_${list._id}` }),
      },
      {
        text: emojis.difficulty0 + (list.difficulty === 0 ? emojis.green : ""),
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Difficulty, id: `0_${list._id}` }),
      },
      {
        text: emojis.difficulty1 + (list.difficulty === 1 ? emojis.green : ""),
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Difficulty, id: `1_${list._id}` }),
      },
      {
        text: emojis.difficulty2 + (list.difficulty === 2 ? emojis.green : ""),
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Difficulty, id: `2_${list._id}` }),
      },
    ] as KeyboardButton[],
    [
      {
        text: capitalize(getFrequencyMessage(0)) + (list.frequency === 0 ? emojis.green : ""),
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Frequency, id: `0_${list._id}` }),
      },
      {
        text: capitalize(getFrequencyMessage(1)) + (list.frequency === 1 ? emojis.green : ""),
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Frequency, id: `1_${list._id}` }),
      },
      {
        text: capitalize(getFrequencyMessage(2)) + (list.frequency === 2 ? emojis.green : ""),
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Frequency, id: `2_${list._id}` }),
      },
      {
        text: capitalize(getFrequencyMessage(3)) + (list.frequency === 3 ? emojis.green : ""),
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Frequency, id: `3_${list._id}` }),
      },
    ] as KeyboardButton[],
    [
      { text: "Values", callback_data: JSON.stringify({ type: TelegramCallbackDataType.Values, id: `${list._id}` }) },
      { text: "Stats", callback_data: JSON.stringify({ type: TelegramCallbackDataType.Stats, id: `l_${list._id}` }) },
      {
        text: "Desc",
        callback_data: JSON.stringify({ type: TelegramCallbackDataType.Description, id: `${list._id}` }),
      },
      { text: "Curate", url: `https://belgocanadian.com/tenthings?list=${list._id}` } as KeyboardButton,
    ],
  ],
});
