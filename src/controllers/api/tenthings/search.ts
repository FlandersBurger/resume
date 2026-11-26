import { List } from "@root/models";
import { accentInsensitivePattern } from "@utils/string-helpers";
import { Request, Response, Router } from "express";

export const tenthingsSearchRoute = Router();

/** Enabled lists whose name contains the text, most played first: what the list editor offers as you type a name. */
tenthingsSearchRoute.get("/list-names/:name", async (req: Request, res: Response) => {
  const name = String(req.params.name ?? "").trim();
  if (name.length < 3) {
    res.json([]);
    return;
  }
  try {
    const lists = await List.find({ enabled: true, name: { $regex: accentInsensitivePattern(name), $options: "i" } })
      .sort({ plays: -1 })
      .limit(10)
      .select("_id name language")
      .lean();
    res.json(lists);
  } catch {
    res.sendStatus(500);
  }
});
