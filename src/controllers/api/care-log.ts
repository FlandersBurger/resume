import { Request, Response, Router } from "express";

import { CareLog } from "@root/models";
import { CareLogType } from "@models/careLog";

export const careLogRoute = Router();

// No auth on purpose: this is used by family/caregivers without accounts, via an unlisted link.

const ALLOWED_FIELDS = [
  "type",
  "date",
  "notes",
  "consistency",
  "food",
  "amountMl",
  "liquidType",
  "durationMinutes",
  "location",
  "intensity",
  "medName",
  "dose",
  "route",
  "tempValue",
  "tempUnit",
  "moodRating",
] as const;

function pickAllowed(body: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  for (const key of ALLOWED_FIELDS) {
    if (body[key] !== undefined) out[key] = body[key];
  }
  return out;
}

careLogRoute.get("/", async (req: Request, res: Response) => {
  const to = req.query.to ? new Date(req.query.to as string) : new Date();
  const from = req.query.from ? new Date(req.query.from as string) : new Date(to.getTime() - 45 * 24 * 60 * 60 * 1000);
  const entries = await CareLog.find({ date: { $gte: from, $lte: to } })
    .sort({ date: 1 })
    .lean();
  res.json(entries);
});

// Distinct recent values, to power autocomplete/quick-fill on the client.
careLogRoute.get("/suggestions", async (req: Request, res: Response) => {
  const type = req.query.type as CareLogType;
  const fieldsByType: Record<string, string[]> = {
    food: ["food"],
    liquid: ["liquidType"],
    med: ["medName", "dose", "route"],
    pain: ["location"],
  };
  const fields = fieldsByType[type];
  if (!fields) {
    res.json([]);
    return;
  }

  const groupId: Record<string, string> = {};
  for (const field of fields) groupId[field] = `$${field}`;

  const results = await CareLog.aggregate([
    { $match: { type, [fields[0]]: { $exists: true, $ne: "" } } },
    { $sort: { date: -1 } },
    { $group: { _id: groupId, lastUsed: { $first: "$date" } } },
    { $sort: { lastUsed: -1 } },
    { $limit: 8 },
  ]);

  res.json(results.map((r) => r._id));
});

careLogRoute.post("/", async (req: Request, res: Response) => {
  const data = pickAllowed(req.body);
  if (!data.type) {
    res.sendStatus(400);
    return;
  }
  const entry = new CareLog(data);
  await entry.save();
  res.json(entry);
});

careLogRoute.put("/:id", async (req: Request, res: Response) => {
  const entry = await CareLog.findById(req.params.id);
  if (!entry) {
    res.sendStatus(404);
    return;
  }
  Object.assign(entry, pickAllowed(req.body));
  await entry.save();
  res.json(entry);
});

careLogRoute.delete("/:id", async (req: Request, res: Response) => {
  const result = await CareLog.deleteOne({ _id: req.params.id });
  if (!result.deletedCount) {
    res.sendStatus(404);
    return;
  }
  res.sendStatus(200);
});
