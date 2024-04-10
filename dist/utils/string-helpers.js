"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskUrls = exports.angleBrackets = exports.removeHTML = exports.capitalize = exports.concealMiddle = exports.conceal = exports.removeAllButLetters = void 0;
const diacritics_1 = __importDefault(require("./diacritics"));
const domains_1 = __importDefault(require("./domains"));
const removeDiacritics = (str) => diacritics_1.default.reduce((result, diacritic) => result.replace(diacritic.letters, diacritic.base), str);
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"";
const removeSpecialCharacters = (str) => str.replace(new RegExp(`[${SPECIAL_CHARACTERS}]`, "gi"), "");
const removeAllButLetters = (str) => removeSpecialCharacters(removeDiacritics(str.toLowerCase()));
exports.removeAllButLetters = removeAllButLetters;
const conceal = (str, extra = "") => str.replace(new RegExp(`[^${SPECIAL_CHARACTERS}${extra}]`, "gi"), "⁎");
exports.conceal = conceal;
const concealMiddle = (str, extra = "") => str.length < 3 ? str : str[0] + (0, exports.conceal)(str.substring(1, str.length - 1), extra) + str[str.length - 1];
exports.concealMiddle = concealMiddle;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
exports.capitalize = capitalize;
const removeHTML = (str) => str.replace(">", "\u227B").replace("<", "\u227A");
exports.removeHTML = removeHTML;
const angleBrackets = (str) => str.replace("<", "&lt;").replace(">", "&gt;");
exports.angleBrackets = angleBrackets;
const replaceArray = (str, sources, replacement) => sources.reduce((result, source) => result.replace(source, replacement), str);
const maskUrls = (str) => replaceArray(replaceArray(str, ["https://", "http://"], "nope://"), domains_1.default, ".nope");
exports.maskUrls = maskUrls;
//# sourceMappingURL=string-helpers.js.map