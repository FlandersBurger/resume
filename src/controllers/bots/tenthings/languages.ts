export type Language = {
  code: SupportedLanguage | BotLanguage;
  name: string;
  native: string;
};

export type LanguageCount = {
  _id: string;
  count: number;
};

export enum BotLanguage {
  AR = "AR",
  FR = "FR",
  EN = "EN",
  ES = "ES",
  DE = "DE",
  KO = "KO",
  NL = "NL",
  HI = "HI",
  ID = "ID",
  PT = "PT",
  RU = "RU",
  TL = "TL",
}

export enum SupportedLanguage {
  AR = "AR",
  FR = "FR",
  EN = "EN",
  ES = "ES",
  DE = "DE",
  KO = "KO",
  NL = "NL",
  HI = "HI",
  ID = "ID",
  PT = "PT",
  RU = "RU",
  TL = "TL",

  IT = "IT",
  JA = "JA",
  LA = "LA",
  PA = "PA",
  PL = "PL",
  TA = "TA",
  TH = "TH",
  TR = "TR",
  ZH = "ZH",
}

export const botLanguages: BotLanguage[] = Object.values(BotLanguage);

const languages: Array<Language> = [
  // { code: SupportedLanguage.AA, name: "Afar", native: "Qafaraf; ’Afar Af; Afaraf; Qafar af" },
  // { code: SupportedLanguage.AB, name: "Abkhazian", native: "Аҧсуа бызшәа; Аҧсшәа" },
  // { code: SupportedLanguage.AF, name: "Afrikaans", native: "Afrikaans" },
  // { code: SupportedLanguage.AM, name: "Amharic", native: "አማርኛ" },
  // { code: SupportedLanguage.AN, name: "Aragonese", native: "aragonés" },
  { code: SupportedLanguage.AR, name: "Arabic", native: "العربية" },
  // { code: SupportedLanguage.AS, name: "Assamese", native: "অসমীয়া" },
  // { code: SupportedLanguage.AV, name: "Avaric", native: "Магӏарул мацӏ; Авар мацӏ" },
  // { code: SupportedLanguage.BA, name: "Bashkir", native: "Башҡорт теле; Başqort tele" },
  // { code: SupportedLanguage.BM, name: "Bambara", native: "ߓߊߡߊߣߊߣߞߊߣ" },
  // { code: SupportedLanguage.BE, name: "Belarusian", native: "Беларуская мова" },
  // { code: SupportedLanguage.BN, name: "Bengali", native: "বাংলা" },
  // { code: SupportedLanguage.BO, name: "Tibetan", native: "བོད་སྐད་; ལྷ་སའི་སྐད་" },
  // { code: SupportedLanguage.BS, name: "Bosnian", native: "bosanski" },
  // { code: SupportedLanguage.BR, name: "Breton", native: "Brezhoneg" },
  // { code: SupportedLanguage.BG, name: "Bulgarian", native: "български език" },
  // { code: SupportedLanguage.CA, name: "Catalan; Valencian", native: "català" },
  // { code: SupportedLanguage.CH, name: "Chamorro", native: "Finu' Chamoru" },
  // { code: SupportedLanguage.CE, name: "Chechen", native: "Нохчийн мотт; نَاخچیین موٓتت; ნახჩიე მუოთთ" },
  // { code: SupportedLanguage.CV, name: "Chuvash", native: "Чӑвашла" },
  // { code: SupportedLanguage.KW, name: "Cornish", native: "Kernowek" },
  // { code: SupportedLanguage.CO, name: "Corsican", native: "Corsu; Lingua corsa" },
  // { code: SupportedLanguage.CY, name: "Welsh", native: "Cymraeg; y Gymraeg" },
  // { code: SupportedLanguage.CS, name: "Czech", native: "čeština; český jazyk" },
  // { code: SupportedLanguage.DA, name: "Danish", native: "dansk" },
  { code: SupportedLanguage.DE, name: "German", native: "Deutsch" },
  // { code: SupportedLanguage.DV, name: "Divehi; Dhivehi; Maldivian", native: "ދިވެހި; ދިވެހިބަސް" },
  // { code: SupportedLanguage.DZ, name: "Dzongkha", native: "རྫོང་ཁ་" },
  // { code: SupportedLanguage.EL, name: "Greek, Modern (1453–)", native: "Νέα Ελληνικά" },
  { code: SupportedLanguage.EN, name: "English", native: "English" },
  // { code: SupportedLanguage.EU, name: "Basque", native: "euskara" },
  // { code: SupportedLanguage.EE, name: "Ewe", native: "Èʋegbe" },
  // { code: SupportedLanguage.FO, name: "Faroese", native: "føroyskt" },
  // { code: SupportedLanguage.FJ, name: "Fijian", native: "Na Vosa Vakaviti" },
  // { code: SupportedLanguage.FI, name: "Finnish", native: "suomen kieli" },
  { code: SupportedLanguage.FR, name: "French", native: "français" },
  // { code: SupportedLanguage.FY, name: "Western Frisian", native: "Frysk" },
  // { code: SupportedLanguage.GD, name: "Gaelic; Scottish Gaelic", native: "Gàidhlig" },
  // { code: SupportedLanguage.GA, name: "Irish", native: "Gaeilge" },
  // { code: SupportedLanguage.GL, name: "Galician", native: "galego" },
  // { code: SupportedLanguage.GV, name: "Manx", native: "Gaelg; Gailck" },
  // { code: SupportedLanguage.GU, name: "Gujarati", native: "ગુજરાતી" },
  // { code: SupportedLanguage.HT, name: "Haitian; Haitian Creole", native: "kreyòl ayisyen" },
  // { code: SupportedLanguage.HA, name: "Hausa", native: "Harshen Hausa; هَرْشَن" },
  // { code: SupportedLanguage.HE, name: "Hebrew", native: "עברית" },
  // { code: SupportedLanguage.HZ, name: "Herero", native: "Otjiherero" },
  { code: SupportedLanguage.HI, name: "Hindi", native: "हिन्दी" },
  // { code: SupportedLanguage.HR, name: "Croatian", native: "hrvatski" },
  // { code: SupportedLanguage.HU, name: "Hungarian", native: "magyar nyelv" },
  // { code: SupportedLanguage.HY, name: "Armenian", native: "Հայերէն; Հայերեն" },
  // { code: SupportedLanguage.IG, name: "Igbo", native: "Asụsụ Igbo" },
  // { code: SupportedLanguage.II, name: "Sichuan Yi; Nuosu", native: "ꆈꌠꉙ" },
  { code: SupportedLanguage.ID, name: "Indonesian", native: "bahasa Indonesia" },
  // { code: SupportedLanguage.IS, name: "Icelandic", native: "íslenska" },
  { code: SupportedLanguage.IT, name: "Italian", native: "italiano" },
  // { code: SupportedLanguage.JV, name: "Javanese", native: "ꦧꦱꦗꦮ" },
  { code: SupportedLanguage.JA, name: "Japanese", native: "日本語" },
  // { code: SupportedLanguage.KN, name: "Kannada", native: "ಕನ್ನಡ" },
  // { code: SupportedLanguage.KS, name: "Kashmiri", native: "कॉशुर / كأشُر" },
  // { code: SupportedLanguage.KA, name: "Georgian", native: "ქართული" },
  // { code: SupportedLanguage.KK, name: "Kazakh", native: "қазақ тілі / qazaq tili" },
  // { code: SupportedLanguage.KM, name: "Central Khmer", native: "ភាសាខ្មែរ" },
  // { code: SupportedLanguage.KI, name: "Kikuyu; Gikuyu", native: "Gĩkũyũ" },
  // { code: SupportedLanguage.KY, name: "Kirghiz; Kyrgyz", native: "кыргызча; кыргыз тили" },
  { code: SupportedLanguage.KO, name: "Korean", native: "한국어" },
  { code: SupportedLanguage.LA, name: "Latin", native: "Lingua Latina" },
  // { code: SupportedLanguage.LO, name: "Lao", native: "ພາສາລາວ" },
  // { code: SupportedLanguage.LI, name: "Limburgan; Limburger; Limburgish", native: "Lèmburgs" },
  // { code: SupportedLanguage.LT, name: "Lithuanian", native: "lietuvių kalba" },
  // { code: SupportedLanguage.LB, name: "Luxembourgish; Letzeburgesch", native: "Lëtzebuergesch" },
  // { code: SupportedLanguage.LU, name: "Luba-Katanga", native: "Kiluba" },
  // { code: SupportedLanguage.LG, name: "Ganda", native: "Luganda" },
  // { code: SupportedLanguage.MK, name: "Macedonian", native: "македонски јазик" },
  // { code: SupportedLanguage.MH, name: "Marshallese", native: "Kajin M̧ajeļ" },
  // { code: SupportedLanguage.ML, name: "Malayalam", native: "മലയാളം" },
  // { code: SupportedLanguage.MI, name: "Maori", native: "Te Reo Māori" },
  // { code: SupportedLanguage.MR, name: "Marathi", native: "मराठी" },
  // { code: SupportedLanguage.MT, name: "Maltese", native: "Malti" },
  // { code: SupportedLanguage.MY, name: "Burmese", native: "မြန်မာစာ; မြန်မာစကား" },
  // { code: SupportedLanguage.NA, name: "Nauru", native: "dorerin Naoero" },
  // { code: SupportedLanguage.NV, name: "Navajo; Navaho", native: "Diné bizaad; Naabeehó bizaad" },
  // { code: SupportedLanguage.NR, name: "Ndebele, South; South Ndebele", native: "isiNdebele seSewula" },
  // { code: SupportedLanguage.ND, name: "Ndebele, North; North Ndebele", native: "siNdebele saseNyakatho" },
  // { code: SupportedLanguage.NG, name: "Ndonga", native: "ndonga" },
  { code: SupportedLanguage.NL, name: "Dutch // Flemish", native: "Nederlands // Vlaams" },
  // { code: SupportedLanguage.NN, name: "Norwegian Nynorsk; Nynorsk, Norwegian", native: "nynorsk" },
  // { code: SupportedLanguage.NB, name: "Bokmål, Norwegian; Norwegian Bokmål", native: "bokmål" },
  // { code: SupportedLanguage.NY, name: "Chichewa; Chewa; Nyanja", native: "Chichewa; Chinyanja" },
  // { code: SupportedLanguage.OS, name: "Ossetian; Ossetic", native: "Ирон æвзаг" },
  { code: SupportedLanguage.PA, name: "Panjabi // Punjabi", native: "ਪੰਜਾਬੀ / پنجابی" },
  { code: SupportedLanguage.PL, name: "Polish", native: "Język polski" },
  { code: SupportedLanguage.PT, name: "Portuguese", native: "português" },
  // { code: SupportedLanguage.RM, name: "Romansh", native: "Rumantsch; Rumàntsch; Romauntsch; Romontsch" },
  // { code: SupportedLanguage.RO, name: "Romanian; Moldavian; Moldovan", native: "limba română" },
  // { code: SupportedLanguage.RN, name: "Rundi", native: "Ikirundi" },
  { code: SupportedLanguage.RU, name: "Russian", native: "русский язык" },
  // { code: SupportedLanguage.SG, name: "Sango", native: "yângâ tî sängö" },
  // { code: SupportedLanguage.SI, name: "Sinhala; Sinhalese", native: "සිංහල" },
  // { code: SupportedLanguage.SK, name: "Slovak", native: "slovenčina; slovenský jazyk" },
  // { code: SupportedLanguage.SL, name: "Slovenian", native: "slovenski jezik; slovenščina" },
  // { code: SupportedLanguage.SE, name: "Northern Sami", native: "davvisámegiella" },
  // { code: SupportedLanguage.SM, name: "Samoan", native: "Gagana faʻa Sāmoa" },
  // { code: SupportedLanguage.SN, name: "Shona", native: "chiShona" },
  // { code: SupportedLanguage.SD, name: "Sindhi", native: "سنڌي / सिन्धी / ਸਿੰਧੀ" },
  // { code: SupportedLanguage.SO, name: "Somali", native: "af Soomaali" },
  // { code: SupportedLanguage.ST, name: "Sotho, Southern", native: "Sesotho [southern]" },
  { code: SupportedLanguage.ES, name: "Spanish // Castilian", native: "español // castellano" },
  // { code: SupportedLanguage.SR, name: "Serbian", native: "српски / srpski" },
  // { code: SupportedLanguage.SS, name: "Swati", native: "siSwati" },
  // { code: SupportedLanguage.SU, name: "Sundanese", native: "Basa Sunda" },
  // { code: SupportedLanguage.SV, name: "Swedish", native: "svenska" },
  // { code: SupportedLanguage.TY, name: "Tahitian", native: "Reo Tahiti; Reo Mā'ohi" },
  { code: SupportedLanguage.TA, name: "Tamil", native: "தமிழ்" },
  // { code: SupportedLanguage.TT, name: "Tatar", native: "татар теле / tatar tele / تاتار" },
  // { code: SupportedLanguage.TE, name: "Telugu", native: "తెలుగు" },
  // { code: SupportedLanguage.TG, name: "Tajik", native: "тоҷикӣ / tojikī" },
  { code: SupportedLanguage.TL, name: "Tagalog", native: "Wikang Tagalog" },
  { code: SupportedLanguage.TH, name: "Thai", native: "ภาษาไทย" },
  // { code: SupportedLanguage.TI, name: "Tigrinya", native: "ትግርኛ" },
  // { code: SupportedLanguage.TO, name: "Tonga (Tonga Islands)", native: "lea faka-Tonga" },
  // { code: SupportedLanguage.TN, name: "Tswana", native: "Setswana" },
  // { code: SupportedLanguage.TS, name: "Tsonga", native: "Xitsonga" },
  // { code: SupportedLanguage.TK, name: "Turkmen", native: "Türkmençe / Түркменче / تورکمن تیلی تورکمنچ; türkmen dili / түркмен дили" },
  { code: SupportedLanguage.TR, name: "Turkish", native: "Türkçe" },
  // { code: SupportedLanguage.UG, name: "Uighur; Uyghur", native: "ئۇيغۇرچە ; ئۇيغۇر تىلى" },
  // { code: SupportedLanguage.UK, name: "Ukrainian", native: "українська мова" },
  // { code: SupportedLanguage.UR, name: "Urdu", native: "اُردُو" },
  // { code: SupportedLanguage.VE, name: "Venda", native: "Tshivenḓa" },
  // { code: SupportedLanguage.VI, name: "Vietnamese", native: "Tiếng Việt" },
  // { code: SupportedLanguage.WA, name: "Walloon", native: "Walon" },
  // { code: SupportedLanguage.XH, name: "Xhosa", native: "isiXhosa" },
  // { code: SupportedLanguage.YO, name: "Yoruba", native: "èdè Yorùbá" },
  // { code: SupportedLanguage.ZU, name: "Zulu", native: "isiZulu" },
  { code: SupportedLanguage.ZH, name: "Chinese", native: "中文 // 汉语 // 漢語" },
];

export default languages;
