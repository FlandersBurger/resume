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
exports.postsRoute = void 0;
const express_1 = require("express");
const queue_1 = __importDefault(require("@root/queue"));
const index_1 = require("@models/index");
exports.postsRoute = (0, express_1.Router)();
exports.postsRoute.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield index_1.Post.find().populate("poster", "username").sort("-date");
    res.json(posts);
}));
exports.postsRoute.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield index_1.Post.findOne({ _id: req.params.id }).populate("poster", "username");
    res.json(post);
}));
exports.postsRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const post = new index_1.Post({
        body: req.body.body,
        poster: (_a = res.locals.user) === null || _a === void 0 ? void 0 : _a._id,
    });
    const savedPost = yield post.save();
    yield queue_1.default.publish("new_post", JSON.stringify(savedPost));
    res.status(201).json(savedPost);
}));
//# sourceMappingURL=posts.js.map