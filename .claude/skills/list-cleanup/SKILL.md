---
name: list-cleanup
description: Bulk changes to Ten Things lists in the production database (renames, merges, deletes, answers, descriptions, blurbs, categories, tags). Use for any audit or fix that touches more than a handful of lists, or any write to prod lists.
---

# List cleanup

Every bulk change to the `lists` collection runs the same loop. Production is live: players see a change on their next round.

## Steps

1. **Export.** Read what you need with a mongo shell script file (not `--eval`, quoting breaks). Read `MONGO_URL` from `.env` (strip quotes and `\r`), then run
   `"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" $MONGO_URL --quiet export.js > data.json`, with the script `print(JSON.stringify(out))`.
   Done when the JSON holds every candidate list with its `_id`, `name`, `language` and the fields you'll change.
2. **Plan in Node.** Do the matching, normalising and text work in a Node/tsx script over the JSON. The 4.4 shell is old JavaScript: no `String.prototype.normalize`, no `\p{…}`. Done when a plan file lists every change as `{list, id, old, new}`.
3. **Review page.** Build a dark-mode HTML page of the plan (old → new, grouped by list, thumbnails for images) and open it. Lead with the groups and counts, so the user can judge the borderline ones. Done when every uncertain match is either in its own section or dropped.
4. **Approval.** Ask for an explicit yes for this write. An earlier yes covers only the change it was given for.
5. **Apply.** Either a committed `src/scripts/<topic>-<yyyy-mm>.ts` (dry run by default, `--apply` to write; run with `npx tsx --env-file=.env`; shared engine in `src/scripts/lib/list-cleanup.ts`) for reviewed one-offs worth keeping, or a generated mongo script for data-only fixes. Either way:
   - back up the affected lists first to `lists_backup_<topic>_<yyyy_mm>`, once (skip the copy if the collection already has documents, so a rerun keeps the original);
   - make each update conditional on the old value (`values: { $elemMatch: { _id, blurb: old } }` with `values.$`), so anything edited since the plan is skipped and counted;
   - change only what the plan names.
6. **Verify.** Re-query: the updated count matches the plan, skipped is 0 or explained, and no list was left with fewer than 10 answers. Report the backup collection's name.

## Rules

- **Ten answers minimum.** A list never drops below 10 values, in any edit. The `$jsonSchema` validator (`src/scripts/lists-min-values.mongo.js`) refuses it; plan around it, never relax it.
- **Scratchpad scripts** import project code by absolute path (`C:/dev/resume/src/...`, `C:/dev/resume/node_modules/mongoose`). Scripts that import models start the bots: import pure modules only.
- **New user-facing text** goes through `i18n()` and `data/locales/master/translation.json`.
- **Hateful or gossip lists:** back up the full documents to a JSON file before deleting, and name each list deleted in the report.
- **Commits from PowerShell:** `git commit -F <file>`; `-m` with quotes breaks.
