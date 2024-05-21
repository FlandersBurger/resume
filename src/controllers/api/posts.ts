import { Request, Response, Router } from "express";
import redis from "@root/queue";
import websocketServer from "@root/server";
import { Post } from "@models/index";

export const postsRoute = Router();

postsRoute.get("/", async (_: Request, res: Response) => {
  const posts = await Post.find().populate("poster", "username").sort("-date");
  res.json(posts);
});

postsRoute.get("/:id", async (req: Request, res: Response) => {
  const post = await Post.findOne({ _id: req.params.id }).populate("poster", "username");
  res.json(post);
});

postsRoute.post("/", async (req: Request, res: Response) => {
  const post = new Post({
    body: req.body.body,
    poster: res.locals.user?._id,
  });

  const savedPost = await post.save();
  await redis.publish("new_post", JSON.stringify(savedPost));
  res.status(201).json(savedPost);
});
