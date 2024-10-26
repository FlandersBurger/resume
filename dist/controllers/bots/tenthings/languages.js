"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBotLanguage = exports.isSupportedLanguage = exports.SupportedLanguage = exports.BotLanguage = void 0;
var BotLanguage;
(function (BotLanguage) {
    BotLanguage["AR"] = "AR";
    BotLanguage["DE"] = "DE";
    BotLanguage["EN"] = "EN";
    BotLanguage["ES"] = "ES";
    BotLanguage["FR"] = "FR";
    BotLanguage["HI"] = "HI";
    BotLanguage["ID"] = "ID";
    BotLanguage["KO"] = "KO";
    BotLanguage["NL"] = "NL";
    BotLanguage["PT"] = "PT";
    BotLanguage["RU"] = "RU";
    BotLanguage["TL"] = "TL";
})(BotLanguage || (exports.BotLanguage = BotLanguage = {}));
var SupportedLanguage;
(function (SupportedLanguage) {
    SupportedLanguage["AR"] = "AR";
    SupportedLanguage["DE"] = "DE";
    SupportedLanguage["EN"] = "EN";
    SupportedLanguage["ES"] = "ES";
    SupportedLanguage["FR"] = "FR";
    SupportedLanguage["HI"] = "HI";
    SupportedLanguage["ID"] = "ID";
    SupportedLanguage["KO"] = "KO";
    SupportedLanguage["NL"] = "NL";
    SupportedLanguage["PT"] = "PT";
    SupportedLanguage["RU"] = "RU";
    SupportedLanguage["TL"] = "TL";
    SupportedLanguage["IT"] = "IT";
    SupportedLanguage["JA"] = "JA";
    SupportedLanguage["LA"] = "LA";
    SupportedLanguage["PA"] = "PA";
    SupportedLanguage["PL"] = "PL";
    SupportedLanguage["TA"] = "TA";
    SupportedLanguage["TH"] = "TH";
    SupportedLanguage["TR"] = "TR";
    SupportedLanguage["ZH"] = "ZH";
})(SupportedLanguage || (exports.SupportedLanguage = SupportedLanguage = {}));
const isSupportedLanguage = (language) => Object.values(SupportedLanguage).includes(language);
exports.isSupportedLanguage = isSupportedLanguage;
const isBotLanguage = (language) => Object.values(BotLanguage).includes(language);
exports.isBotLanguage = isBotLanguage;
const languages = [
    { code: SupportedLanguage.AR, name: "Arabic", native: "العربية" },
    { code: SupportedLanguage.DE, name: "German", native: "Deutsch" },
    { code: SupportedLanguage.EN, name: "English", native: "English" },
    { code: SupportedLanguage.FR, name: "French", native: "français" },
    { code: SupportedLanguage.HI, name: "Hindi", native: "हिन्दी" },
    { code: SupportedLanguage.ID, name: "Indonesian", native: "bahasa Indonesia" },
    { code: SupportedLanguage.IT, name: "Italian", native: "italiano" },
    { code: SupportedLanguage.JA, name: "Japanese", native: "日本語" },
    { code: SupportedLanguage.KO, name: "Korean", native: "한국어" },
    { code: SupportedLanguage.LA, name: "Latin", native: "Lingua Latina" },
    { code: SupportedLanguage.NL, name: "Dutch // Flemish", native: "Nederlands // Vlaams" },
    { code: SupportedLanguage.PA, name: "Panjabi // Punjabi", native: "ਪੰਜਾਬੀ / پنجابی" },
    { code: SupportedLanguage.PL, name: "Polish", native: "Język polski" },
    { code: SupportedLanguage.PT, name: "Portuguese", native: "português" },
    { code: SupportedLanguage.RU, name: "Russian", native: "русский язык" },
    { code: SupportedLanguage.ES, name: "Spanish // Castilian", native: "español // castellano" },
    { code: SupportedLanguage.TA, name: "Tamil", native: "தமிழ்" },
    { code: SupportedLanguage.TL, name: "Tagalog", native: "Wikang Tagalog" },
    { code: SupportedLanguage.TH, name: "Thai", native: "ภาษาไทย" },
    { code: SupportedLanguage.TR, name: "Turkish", native: "Türkçe" },
    { code: SupportedLanguage.ZH, name: "Chinese", native: "中文 // 汉语 // 漢語" },
];
exports.default = languages;
//# sourceMappingURL=languages.js.map