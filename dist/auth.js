"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_simple_1 = __importDefault(require("jwt-simple"));
var config = require("../config");
const user_1 = __importDefault(require("./models/user"));
const User = (0, user_1.default)();
exports.default = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    res.locals.isAuthorized = false;
    res.locals.isAdmin = false;
    let authCode;
    if (req.headers["x-auth"]) {
      authCode = jwt_simple_1.default.decode(req.headers["x-auth"], config.secret);
    }
    if (authCode === null || authCode === void 0 ? void 0 : authCode.userid) {
      const user = yield User.findOne({ _id: authCode.userid });
      if (user) {
        res.locals.user = user;
        res.locals.isAuthorized = !!user && authCode.userid != "5ece428af848aa2fc392d099";
        res.locals.isAdmin = !!user && config.admins.indexOf(authCode.userid) >= 0;
      }
    }
    next();
  });
//# sourceMappingURL=auth.js.map
