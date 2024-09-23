import { Router, Request, Response, QueryableRequest } from "express";

import bcrypt from "bcryptjs";
import jwt from "jwt-simple";
import { firebase } from "@root/server";

import { User } from "@models/index";

export const usersRoute = Router();

usersRoute.get("/", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else res.json(res.locals.user);
});

usersRoute.get("/all", async (req: QueryableRequest, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const page = parseInt(req.query.page ?? 1);
    const users = await User.find({})
      .select("-gender -flags -highscore")
      .limit(parseInt(req.query.limit) || 0)
      .skip(parseInt(req.query.limit) * (page - 1) || 0);
    res.json(users);
  }
});

usersRoute.post("/ban/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const user = await User.findOne({ _id: req.params.id });
    if (user) {
      console.log(user);
      user.banned = !user.banned;
      try {
        await user.save();
      } catch (e) {}
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

usersRoute.post("/", async (req: Request, res: Response) => {
  const user = new User({
    username: req.body.username,
    usernameLC: req.body.username.toLowerCase(),
  });
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  user.password = hash;
  user.flags = [];
  await user.save();
  res.sendStatus(201);
});

usersRoute.post("/authenticate", async (req: Request, res: Response) => {
  var user = req.body.user;
  const decodedToken = await firebase.auth().verifyIdToken(user.idToken);
  console.log(decodedToken);
  var uid = decodedToken.uid;
  console.log(uid);
  const foundUser = await User.findOne({
    uid: uid,
    banned: false,
  });
  if (!foundUser) {
    var newUser = new User({
      username: user.displayName,
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl,
      emailVerified: user.emailVerified,
      uid: uid,
    });
    await newUser.save();
    console.log(user.username + " created");
    const token = jwt.encode({ userid: user.id }, process.env.SECRET!);
    res.json(token);
  } else {
    console.log(foundUser.username + " authenticated");
    const token = jwt.encode({ userid: foundUser.id }, process.env.SECRET!);
    res.json(token);
  }
});

usersRoute.get("/:id/login", async (req: Request, res: Response) => {
  const foundUser = await User.findOne({ _id: req.params.id });
  if (!foundUser) {
    res.sendStatus(404);
  } else if (foundUser.banned) {
    res.sendStatus(401);
  } else {
    console.log(foundUser.username + " logged in");
    const token = jwt.encode({ userid: foundUser.id }, process.env.SECRET!);
    res.json(token);
  }
});

usersRoute.post("/:id/verification", async (req: Request, res: Response) => {
  if (checkUser(req.params.id, res)) {
    const user = await User.findOne({ _id: res.locals.user?._id }).select("password");
    if (!user || user.banned) res.sendStatus(401);
    else {
      const valid = await bcrypt.compare(req.body.password, user.password);
      res.sendStatus(valid ? 200 : 401);
    }
  } else {
    res.sendStatus(401);
  }
});

usersRoute.post("/:id", async (req: Request, res: Response) => {
  if (checkUser(req.params.id, res)) {
    if (!res.locals.user?._id) res.sendStatus(400);
    else {
      const user = await User.findOne({ _id: res.locals.user._id });
      if (!user || user.banned) res.sendStatus(401);
      else {
        user.gender = req.body.user.gender;
        user.flags = req.body.user.flags;
        await user.save();
        console.log(user.username + " updated their profile");
        res.sendStatus(200);
      }
    }
  } else {
    res.sendStatus(401);
  }
});

usersRoute.post("/:id/password", async (req: Request, res: Response) => {
  if (checkUser(req.params.id, res)) {
    const user = await User.findOne({ _id: res.locals.user?._id }).select("username").select("password");
    if (!user || user.banned) res.sendStatus(401);
    else {
      const valid = await bcrypt.compare(req.body.oldPassword, user.password);
      if (!valid) res.sendStatus(401);
      else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.newPassword, salt);
        user.password = hash;
        await user.save();
        console.log(user.username + " changed their password");
        res.sendStatus(200);
      }
    }
  } else {
    res.sendStatus(401);
  }
});

usersRoute.post("/:id/username", async (req: Request, res: Response) => {
  if (checkUser(req.params.id, res)) {
    const user = await User.findOne({ _id: res.locals.user?._id }).select("username").select("usernameLC");
    if (!user || user.banned) res.sendStatus(401);
    else {
      const user2 = await User.findOne({ username_lower: req.body.newUsername.toLowerCase() });
      if (user2) {
        if (user2._id !== res.locals.user?._id) {
          console.log(req.body.newUsername + " already taken");
          res.sendStatus(304);
        }
      } else {
        console.log(user.username + " changed their name to " + req.body.newUsername);
        user.username = req.body.newUsername;
        user.usernameLC = req.body.newUsername.toLowerCase();
        await user.save();
        res.sendStatus(200);
      }
    }
  } else {
    res.sendStatus(401);
  }
});

function checkUser(user: string, res: Response) {
  if (!res.locals.user?._id) return false;
  return user === res.locals.user._id.toString();
}
