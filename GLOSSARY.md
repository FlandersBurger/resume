# Ten Things

A multiplayer trivia game where players race to guess the ten answers on a list. The same game runs on several platforms (Telegram, Discord, the website), each a different way of reaching the same rules.

## Language

### Playing

**Game**:
One ongoing Ten Things instance tied to one chat, channel or web room, with its own players, settings and history.
_Avoid_: session, match, chat (when you mean the game)

**Platform**:
A place a Game is played: Telegram, Discord or the website.
_Avoid_: provider (when you mean the place, not the code), client

**Player**:
A person taking part in one Game; the same person in two Games is two Players.
_Avoid_: user (a User is the site account, a Player is per-Game)

**Round**:
One List being played in a Game, from the moment it's served until it ends with an Outcome.
_Avoid_: turn, game (for a single list)

**Outcome**:
How a Round ended: completed (every Answer guessed), skipped, or banned. A Round that hasn't ended yet is in progress.
_Avoid_: result, status

**Guess**:
A Player's free-typed attempt at one of the current Round's Answers.
_Avoid_: answer (the Answer is what's on the List), move

**Hint**:
A partial reveal of the unguessed Answers, requested by a Player and limited by a cooldown.
_Avoid_: clue (Clues belong to the Tinygame)

**Skip**:
Ending the current Round early by Player vote, unless another Player vetoes it.
_Avoid_: pass, next

**Veto**:
A Player's objection that cancels a pending Skip.

**Daily score**:
A Player's points in a Game for the current day; the highest at the end of the day wins it.
_Avoid_: total, ranking

**Streak**:
A run of consecutive Answers guessed by the same Player in a Game, broken when anyone else guesses; a Player's best run is kept.
_Avoid_: combo

**Play streak**:
Consecutive days a Player has played in a Game.

**Minigame**:
A side puzzle running alongside the Rounds: guess the single answer that appears on every List shown.

**Tinygame**:
A side puzzle running alongside the Rounds: guess the answer from a set of Clues.

### Lists

**List**:
A named set of up to ten Answers in one language, with categories, community Votes and play history.
_Avoid_: question, topic, quiz

**Answer**:
One item on a List, optionally with a Blurb.
_Avoid_: value (in conversation), item, solution

**Blurb**:
Extra content shown when an Answer is guessed: text, an image, or a YouTube or Spotify link.

**Starred list**:
A List curated as good enough to serve on the website.
_Avoid_: featured, approved

**Vote**:
A Player's like or dislike of a List, which feeds its List score.
_Avoid_: rating

**List score**:
A List's quality: community Votes and the share of Rounds that weren't skipped, weighed equally.
_Avoid_: rating, popularity

**Pick**:
A Player putting a specific List in the Game's queue to be played soon.
_Avoid_: request, queue (as a verb)

**Ban**:
A Game permanently refusing a List, so it's never served there again.
_Avoid_: block, blacklist

**Cycle**:
One pass through every List a Game is allowed to play; when the pool runs out, a new Cycle starts.
_Avoid_: season, loop

### Choosing the next List

**List source**:
What decides which List a Game plays next.

**Rotation**:
The List source for open-ended Games: Picks first, then unplayed Lists from the allowed pool, starting a new Cycle when it runs out.
_Avoid_: random, shuffle

**Playlist**:
The List source for a fixed-length Game: a set number of Lists chosen when it starts, after which the Game is over.
_Avoid_: set, deck

### How the rules are organised

**Engine**:
The Ten Things rules, independent of any Platform: it takes Actions and reports Events.
_Avoid_: bot, maingame, provider

**Round core**:
The part of the Engine every Platform needs: serving Lists, Guesses, Hints, Skips and scoring a Round.

**Community features**:
The part of the Engine that open-ended chat Games add on top of the Round core: Votes, Picks, Bans, search, Daily scores, Streaks, the Minigame and Tinygame, and Game settings.

**Action**:
Something a Player, an admin or the passage of time asks the Engine to do in a Game (guess, hint, skip, vote, pick, ban, start the next Round, …).
_Avoid_: command (a command is one Platform's way of sending an Action), callback

**Event**:
Something the Engine reports as having happened in a Game (a Guess matched, a Round ended, a List was picked, …), for each Platform to show in its own way.
_Avoid_: message, notification
