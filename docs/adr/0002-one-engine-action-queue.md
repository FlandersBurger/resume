---
status: accepted
---

# Every Engine Action runs through one queue, one at a time

Each Engine Action loads a Game, changes it and saves it. The Actions include Guesses, Hints, Skips, Votes, Picks, Bans, settings changes, and timer firings such as starting the next Round. All of them go through a single Bull queue with concurrency 1, across every Game. Two Actions on the same Game therefore can never overwrite each other's changes. Delayed Actions are Bull delayed jobs on that same queue, so they survive a restart and fall into the same order as everything else. This extends how Guesses were already handled, an approach that has worked in production. Votes, Skips and button callbacks used to run concurrently and could lose updates.

## Considered Options

- **Optimistic concurrency** (Mongoose versioning plus retries). Gives better throughput, but every Action would have to be safe to retry. We rejected it because many Actions send messages along the way.
- **A per-game Redis lock** (parallel across Games, ordered within one). Scales best, but means building and testing our own locking for a load we don't have.
- **Plain setTimeout for delays.** This is what we had. It is lost on restart, and it runs outside the queue's ordering.

## Consequences

- Throughput is capped at one Action at a time for all Games combined. Watch the queue depth (`getCount`). If it starts lagging, the next step is the per-game option above, not removing the queue.
- A delayed Action carries the id of the Round it was scheduled for and is dropped if that Round has ended (see ADR-0001). Guesses keep only the 30-second age check.
- The Engine schedules through a scheduler interface. Production uses the Bull adapter; tests use a fake clock, so Engine tests don't need Redis.
