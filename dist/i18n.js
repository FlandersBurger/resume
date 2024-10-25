"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t_list = void 0;
const i18next_1 = __importDefault(require("i18next"));
const i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
const path_1 = require("path");
const fs_1 = require("fs");
const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
const localesFolder = (0, path_1.join)(__dirname, "../data/locales");
i18next_1.default.use(i18next_fs_backend_1.default).init({
    initImmediate: false,
    fallbackLng: "en",
    preload: (0, fs_1.readdirSync)(localesFolder).filter((fileName) => {
        const joinedPath = (0, path_1.join)(localesFolder, fileName);
        return (0, fs_1.lstatSync)(joinedPath).isDirectory();
    }),
    backend: {
        loadPath: (0, path_1.join)(localesFolder, "{{lng}}/{{ns}}.json"),
    },
    ns: ["translation", "commands", "categories"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
});
exports.default = (lng, key, params = {}) => i18next_1.default.getFixedT(lng ? lng.toLowerCase() : systemLocale)(key, params);
const t_list = (lng, key, params = {}) => i18next_1.default.getFixedT(lng ? lng.toLowerCase() : systemLocale)(key, params);
exports.t_list = t_list;
//# sourceMappingURL=i18n.js.map