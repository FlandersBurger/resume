"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const admin = require("firebase-admin");
const config = require("../../../config.js");
const index_1 = require("../../../models/index");
exports.usersRoute = (0, express_1.Router)();
exports.usersRoute.get("/", function (_, res) {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    res.json(res.locals.user);
});
exports.usersRoute.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAdmin)
        return res.send(401);
    const users = yield index_1.User.find({})
        .select("-gender -flags -highscore")
        .limit(parseInt(req.query.limit))
        .skip(parseInt(req.query.limit) * (parseInt(req.query.page) - 1));
    res.json(users);
}));
exports.usersRoute.get("/ban/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAdmin)
        return res.sendStatus(401);
    const user = yield index_1.User.findOne({ _id: req.params.id });
    if (user) {
        console.log(user);
        user.banned = !user.banned;
        try {
            yield user.save();
        }
        catch (e) { }
        res.sendStatus(200);
    }
}));
exports.usersRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new index_1.User({
        username: req.body.username,
        usernameLC: req.body.username.toLowerCase(),
    });
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hash = yield bcryptjs_1.default.hash(req.body.password, salt);
    user.password = hash;
    user.flags = [];
    yield user.save();
    res.sendStatus(201);
}));
exports.usersRoute.post("/authenticate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var user = req.body.user;
    const decodedToken = yield admin.auth().verifyIdToken(user.idToken);
    console.log(decodedToken);
    var uid = decodedToken.uid;
    console.log(uid);
    const foundUser = yield index_1.User.findOne({
        uid: uid,
        banned: false,
    });
    if (!foundUser) {
        var newUser = new index_1.User({
            username: user.displayName,
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
            emailVerified: user.emailVerified,
            uid: uid,
        });
        yield newUser.save();
        console.log(user.username + " created");
        const token = jwt_simple_1.default.encode({ userid: user.id }, config.secret);
        res.json(token);
    }
    else {
        console.log(foundUser.username + " authenticated");
        const token = jwt_simple_1.default.encode({ userid: foundUser.id }, config.secret);
        res.json(token);
    }
}));
exports.usersRoute.get("/:id/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield index_1.User.findOne({ _id: req.params.id });
    if (!foundUser) {
        res.sendStatus(404);
    }
    else if (foundUser.banned) {
        res.sendStatus(401);
    }
    else {
        console.log(foundUser.username + " logged in");
        const token = jwt_simple_1.default.encode({ userid: foundUser.id }, config.secret);
        res.json(token);
    }
}));
exports.usersRoute.post("/:id/verification", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (checkUser(req.params.id, res)) {
        const user = yield index_1.User.findOne({ _id: (_a = res.locals.user) === null || _a === void 0 ? void 0 : _a._id }).select("password");
        if (!user || user.banned)
            return res.sendStatus(401);
        const valid = yield bcryptjs_1.default.compare(req.body.password, user.password);
        res.sendStatus(valid ? 200 : 401);
    }
    else {
        return res.sendStatus(401);
    }
}));
exports.usersRoute.post("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    if (checkUser(req.params.id, res)) {
        if (!((_b = res.locals.user) === null || _b === void 0 ? void 0 : _b._id))
            return res.sendStatus(400);
        const user = yield index_1.User.findOne({ _id: res.locals.user._id });
        if (!user || user.banned)
            return res.sendStatus(401);
        user.gender = req.body.user.gender;
        user.flags = req.body.user.flags;
        yield user.save();
        console.log(user.username + " updated their profile");
        res.sendStatus(200);
    }
    else {
        return res.sendStatus(401);
    }
}));
exports.usersRoute.post("/:id/password", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    if (checkUser(req.params.id, res)) {
        const user = yield index_1.User.findOne({ _id: (_c = res.locals.user) === null || _c === void 0 ? void 0 : _c._id }).select("username").select("password");
        if (!user || user.banned)
            return res.sendStatus(401);
        const valid = yield bcryptjs_1.default.compare(req.body.oldPassword, user.password);
        if (!valid)
            return res.sendStatus(401);
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hash = yield bcryptjs_1.default.hash(req.body.newPassword, salt);
        user.password = hash;
        yield user.save();
        console.log(user.username + " changed their password");
        res.sendStatus(200);
    }
    else {
        return res.sendStatus(401);
    }
}));
exports.usersRoute.post("/:id/username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    if (checkUser(req.params.id, res)) {
        const user = yield index_1.User.findOne({ _id: (_d = res.locals.user) === null || _d === void 0 ? void 0 : _d._id }).select("username").select("usernameLC");
        if (!user || user.banned)
            return res.sendStatus(401);
        const user2 = yield index_1.User.findOne({ username_lower: req.body.newUsername.toLowerCase() });
        if (user2) {
            if (user2._id !== ((_e = res.locals.user) === null || _e === void 0 ? void 0 : _e._id)) {
                console.log(req.body.newUsername + " already taken");
                return res.sendStatus(304);
            }
        }
        console.log(user.username + " changed their name to " + req.body.newUsername);
        user.username = req.body.newUsername;
        user.usernameLC = req.body.newUsername.toLowerCase();
        yield user.save();
        res.sendStatus(200);
    }
    else {
        return res.sendStatus(401);
    }
}));
function checkUser(user, res) {
    var _a;
    if (!((_a = res.locals.user) === null || _a === void 0 ? void 0 : _a._id))
        return false;
    return user === res.locals.user._id.toString();
}
//# sourceMappingURL=users.js.map