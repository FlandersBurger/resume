"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const user_1 = __importDefault(require("../models/user"));
const User = (0, user_1.default)();
exports.default = async (req, res, next) => {
    res.locals.isAuthorized = false;
    res.locals.isAdmin = false;
    let authCode;
    if (req.headers["x-auth"]) {
        authCode = jwt_simple_1.default.decode(req.headers["x-auth"], process.env.SECRET);
    }
    if (authCode?.userid) {
        const user = await User.findOne({ _id: authCode.userid });
        if (user) {
            res.locals.user = user;
            res.locals.isAuthorized = !!user && authCode.userid != "5ece428af848aa2fc392d099";
            res.locals.isAdmin = !!user && user.admin;
        }
    }
    next();
};
//# sourceMappingURL=auth.js.map