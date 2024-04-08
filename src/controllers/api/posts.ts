import { Request, Response, Router } from "express";
import redis from "@/redis";
import websocketServer from "@/server";
import { Post } from "@/models";

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
  // @ts-ignore
  redis.publish("new_post", savedPost);
  res.status(201).json(savedPost);
});

redis.subscribe("new_post", (post: any) => {
  websocketServer.broadcast("new_post", post);
});
