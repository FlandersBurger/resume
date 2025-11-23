"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const express_1 = require("express");
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const server_1 = require("../../server");
const index_1 = require("../../models/index");
const telegram_1 = __importDefault(require("../../connections/telegram"));
exports.usersRoute = (0, express_1.Router)();
const isAcceptedAuth = (authType = "") => ["telegram", "firebase"].includes(authType);
exports.usersRoute.get("/", (_, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else
        res.json(res.locals.user);
});
exports.usersRoute.get("/all", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else {
        const page = parseInt(req.query.page ?? 1);
        const users = await index_1.User.find({})
            .select("-gender -flags -highscore")
            .limit(parseInt(req.query.limit) || 0)
            .skip(parseInt(req.query.limit) * (page - 1) || 0);
        res.json(users);
    }
});
exports.usersRoute.post("/ban/:id", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else {
        const user = await index_1.User.findOne({ _id: req.params.id });
        if (user) {
            console.log(user);
            user.banned = !user.banned;
            try {
                await user.save();
            }
            catch (e) { }
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
    }
});
exports.usersRoute.post("/", async (req, res) => {
    const user = new index_1.User({
        username: req.body.username,
    });
    const salt = await bcryptjs_1.default.genSalt(10);
    const hash = await bcryptjs_1.default.hash(req.body.password, salt);
    user.password = hash;
    user.flags = [];
    await user.save();
    res.sendStatus(201);
});
exports.usersRoute.post("/authenticate", async (req, res) => {
    const { authType, data, ...user } = req.body.user;
    if (!isAcceptedAuth(authType)) {
        return res.sendStatus(401);
    }
    let foundUser, uid, telegramId;
    if (authType === "firebase") {
        const decodedToken = await server_1.firebase.auth().verifyIdToken(user.idToken);
        uid = decodedToken.uid;
        foundUser = await index_1.User.findOne({
            uid,
        });
    }
    else {
        const checkString = Object.keys(data)
            .filter((k) => k !== "hash")
            .sort()
            .filter((k) => data[k])
            .map((k) => `${k}=${data[k]}`)
            .join("\n");
        const hmacKey = crypto_1.default.createHash("sha256").update(process.env.TELEGRAM_TOKEN).digest();
        const hmac = crypto_1.default.createHmac("sha256", hmacKey).update(checkString).digest("hex");
        if (hmac !== user.idToken) {
            console.log(hmac, hmacKey, user.idToken, checkString);
            return res.sendStatus(401);
        }
        else {
            return res.sendStatus(200);
        }
        telegramId = user.telegramId;
        foundUser = await index_1.User.findOne({
            telegramId,
        });
    }
    if (!foundUser) {
        const newUser = new index_1.User({
            username: user.username ?? user.displayName,
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
            emailVerified: user.emailVerified,
            uid,
            telegramId,
        });
        await newUser.save();
        telegram_1.default.notifyAdmin(`New user registered with ${authType}: ` + user.displayName);
        const token = jwt_simple_1.default.encode({ userid: user.id }, process.env.SECRET);
        return res.json(token);
    }
    else {
        if (foundUser.banned) {
            return res.sendStatus(403);
        }
        console.log(foundUser.username + " authenticated with " + authType);
        const token = jwt_simple_1.default.encode({ userid: foundUser.id }, process.env.SECRET);
        return res.json(token);
    }
});
exports.usersRoute.get("/:id/login", async (req, res) => {
    const foundUser = await index_1.User.findOne({ _id: req.params.id });
    if (!foundUser) {
        res.sendStatus(404);
    }
    else if (foundUser.banned) {
        res.sendStatus(401);
    }
    else {
        console.log(foundUser.username + " logged in");
        const token = jwt_simple_1.default.encode({ userid: foundUser.id }, process.env.SECRET);
        res.json(token);
    }
});
exports.usersRoute.post("/:id/verification", async (req, res) => {
    if (checkUser(req.params.id, res)) {
        const user = await index_1.User.findOne({ _id: res.locals.user?._id }).select("password");
        if (!user || user.banned)
            res.sendStatus(401);
        else {
            const valid = await bcryptjs_1.default.compare(req.body.password, user.password);
            res.sendStatus(valid ? 200 : 401);
        }
    }
    else {
        res.sendStatus(401);
    }
});
exports.usersRoute.post("/:id", async (req, res) => {
    if (checkUser(req.params.id, res)) {
        if (!res.locals.user?._id)
            res.sendStatus(400);
        else {
            const user = await index_1.User.findOne({ _id: res.locals.user._id });
            if (!user || user.banned)
                res.sendStatus(401);
            else {
                user.gender = req.body.user.gender;
                user.flags = req.body.user.flags;
                await user.save();
                console.log(user.username + " updated their profile");
                res.sendStatus(200);
            }
        }
    }
    else {
        res.sendStatus(401);
    }
});
exports.usersRoute.post("/:id/password", async (req, res) => {
    if (checkUser(req.params.id, res)) {
        const user = await index_1.User.findOne({ _id: res.locals.user?._id }).select("username").select("password");
        if (!user || user.banned)
            res.sendStatus(401);
        else {
            const valid = await bcryptjs_1.default.compare(req.body.oldPassword, user.password);
            if (!valid)
                res.sendStatus(401);
            else {
                const salt = await bcryptjs_1.default.genSalt(10);
                const hash = await bcryptjs_1.default.hash(req.body.newPassword, salt);
                user.password = hash;
                await user.save();
                console.log(user.username + " changed their password");
                res.sendStatus(200);
            }
        }
    }
    else {
        res.sendStatus(401);
    }
});
exports.usersRoute.post("/:id/username", async (req, res) => {
    if (checkUser(req.params.id, res)) {
        const user = await index_1.User.findOne({ _id: res.locals.user?._id }).select("username");
        if (!user || user.banned)
            res.sendStatus(401);
        else {
            const user2 = await index_1.User.findOne({ username: { $regex: `^${req.body.newUsername}$`, $options: "i" } });
            if (user2) {
                if (user2._id !== res.locals.user?._id) {
                    console.log(req.body.newUsername + " already taken");
                    res.sendStatus(304);
                }
            }
            else {
                console.log(user.username + " changed their name to " + req.body.newUsername);
                user.username = req.body.newUsername;
                await user.save();
                res.sendStatus(200);
            }
        }
    }
    else {
        res.sendStatus(401);
    }
});
function checkUser(user, res) {
    if (!res.locals.user?._id)
        return false;
    return user === res.locals.user._id.toString();
}
//# sourceMappingURL=users.js.map