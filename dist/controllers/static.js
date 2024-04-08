"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticRoute = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
exports.staticRoute = express_1.default.Router();
exports.staticRoute.use(express_1.default.static(__dirname + "/../../assets"));
exports.staticRoute.use(express_1.default.static(__dirname + "/../../resources"));
exports.staticRoute.use(express_1.default.static(__dirname + "/../../images"));
exports.staticRoute.use(express_1.default.static(__dirname + "/../../sounds"));
exports.staticRoute.use(express_1.default.static(__dirname + "/../../pages"));
exports.staticRoute.use(express_1.default.static(__dirname + "/../../data"));
exports.staticRoute.get("/*", function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname + "/../../index.html"));
});
//# sourceMappingURL=static.js.map