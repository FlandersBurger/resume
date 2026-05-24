"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = exports.createPost = exports.fetchPosts = void 0;
const http_1 = __importDefault(require("./http"));
async function fetchPosts() {
    const { data } = await http_1.default.get("/api/posts");
    return data;
}
exports.fetchPosts = fetchPosts;
async function createPost(body) {
    const { data } = await http_1.default.post("/api/posts", { body });
    return data;
}
exports.createPost = createPost;
async function getPost(id) {
    const { data } = await http_1.default.get(`/api/posts/${id}`);
    return data;
}
exports.getPost = getPost;
//# sourceMappingURL=posts.js.map