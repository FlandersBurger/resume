export enum TelegramCallbackDataType {
  Ban = "ban",
  BotLanguage = "lang",
  Category = "cat",
  Subcategory = "sub",
  ConfirmBan = "cban",
  Description = "desc",
  Difficulty = "diff",
  Frequency = "freq",
  Pick = "pick",
  Score = "score",
  Setting = "setting",
  Stats = "stat",
  StatOptions = "stats",
  Suggestion = "suggest",
  TriviaLanguages = "langs",
  Values = "values",
  Vote = "vote",
  SkipDelay = "skipDelay",
  VetoDelay = "vetoDelay",
  HintDelay = "hintDelay",
}

export type TelegramCallbackDataTypeDelay =
  | TelegramCallbackDataType.SkipDelay
  | TelegramCallbackDataType.VetoDelay
  | TelegramCallbackDataType.HintDelay;

export const callbackDateTypeDelays: TelegramCallbackDataTypeDelay[] = [
  TelegramCallbackDataType.SkipDelay,
  TelegramCallbackDataType.VetoDelay,
  TelegramCallbackDataType.HintDelay,
];
