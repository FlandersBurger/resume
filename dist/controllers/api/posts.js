"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRoute = void 0;
const express_1 = require("express");
const queue_1 = __importDefault(require("@root/queue"));
const index_1 = require("@models/index");
exports.postsRoute = (0, express_1.Router)();
exports.postsRoute.get("/", async (_, res) => {
    const posts = await index_1.Post.find().populate("poster", "username").sort("-date");
    res.json(posts);
});
exports.postsRoute.get("/:id", async (req, res) => {
    const post = await index_1.Post.findOne({ _id: req.params.id }).populate("poster", "username");
    res.json(post);
});
exports.postsRoute.post("/", async (req, res) => {
    const post = new index_1.Post({
        body: req.body.body,
        poster: res.locals.user?._id,
    });
    const savedPost = await post.save();
    await queue_1.default.publish("new_post", JSON.stringify(savedPost));
    res.status(201).json(savedPost);
});
//# sourceMappingURL=posts.js.map