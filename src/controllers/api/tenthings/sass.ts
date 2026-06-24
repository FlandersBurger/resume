import { Router, Request, Response } from "express";

import { Sass } from "@models/index";

export const tenthingsSassRoute = Router();

// Each requiresBotMention bucket may have at most one catch-all (empty triggers) entry.
const hasConflictingCatchAll = async (requiresBotMention: boolean, excludeId?: string) =>
  !!(await Sass.findOne({
    requiresBotMention,
    triggers: { $size: 0 },
    ...(excludeId && { _id: { $ne: excludeId } }),
  }));

tenthingsSassRoute.get("/", async (_: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const entries = await Sass.find({}).sort({ requiresBotMention: -1, order: 1 }).lean();
    res.json(entries);
  }
});

tenthingsSassRoute.post("/", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else if ((req.body.triggers ?? []).length === 0 && (await hasConflictingCatchAll(req.body.requiresBotMention))) {
    res.status(400).json({ error: "A catch-all entry (empty triggers) already exists for this bucket." });
  } else {
    const entry = await Sass.create(req.body);
    res.json(entry);
  }
});

tenthingsSassRoute.put("/:id", async (req: Request<{ id: string }>, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const entry = await Sass.findById(req.params.id);
    if (!entry) res.sendStatus(404);
    else {
      const triggers = req.body.triggers ?? entry.triggers;
      const requiresBotMention = req.body.requiresBotMention ?? entry.requiresBotMention;
      if (triggers.length === 0 && (await hasConflictingCatchAll(requiresBotMention, req.params.id))) {
        res.status(400).json({ error: "A catch-all entry (empty triggers) already exists for this bucket." });
      } else {
        Object.assign(entry, req.body);
        entry.modifyDate = new Date();
        await entry.save();
        res.json(entry);
      }
    }
  }
});

tenthingsSassRoute.delete("/:id", async (req: Request<{ id: string }>, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    await Sass.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  }
});
