---
status: accepted
---

# Rounds are recorded when they start, not when they end

A GameRound record is created as soon as a Round is served, with outcome `inProgress`, and closed later as `completed`, `skipped` or `banned`. Its `_id` identifies the Round, so delayed Actions (start the next Round, start a Minigame) can tell when they've gone stale. It also holds the state that only lasts for one Round: Skip and Veto votes, when the next Hint is allowed, Hints used and Answers revealed. This state used to live in process memory and was lost on every restart.

## Considered Options

- **A round counter on the Game** (write GameRound only at the end, as before). This is the smaller change and leaves stats queries alone. We rejected it because it gives the Round's own state nowhere durable to live, and the Game document would have to be cleared by hand after every Round.

## Consequences

- Every query over GameRound must leave out Rounds still in progress. The List metrics module provides one shared "finished rounds" filter, so new aggregations should use it rather than filtering on outcome themselves.
- Flush (wiping a Game's play history) must keep the Round in progress.
- When this ships, Games that are mid-Round have no in-progress record yet. The Engine creates one on that Game's first Action.
- Bans are still stored as GameRound rows with outcome `banned`, even though a Ban isn't a played Round. That's a known wrinkle we kept on purpose, and the Engine hides it.
