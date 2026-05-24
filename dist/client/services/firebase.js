"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseSignOut = exports.auth = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const app_2 = __importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
const firebaseConfig = {
    apiKey: "AIzaSyAxGFQpwqPfbMKEGRWsJk6B8gvY2A5PzoM",
    authDomain: "resume-172205.firebaseapp.com",
    databaseURL: "https://resume-172205.firebaseio.com",
    projectId: "resume-172205",
    storageBucket: "resume-172205.appspot.com",
    messagingSenderId: "528274606655",
};
app_2.default.initializeApp(firebaseConfig);
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
async function firebaseSignOut() {
    await (0, auth_1.signOut)(exports.auth);
}
exports.firebaseSignOut = firebaseSignOut;
//# sourceMappingURL=firebase.js.map