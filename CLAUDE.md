# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Backend (Node/Express):**

```bash
npm run dev          # Run server with tsx (no compile step, hot-reload via tsx watch)
npm run watch        # tsx watch mode
npm run build        # tsc + tsc-alias (compile to dist/)
npm run bundle       # rimraf dist + build (clean build)
```

**Frontend (React/Vite):**

```bash
npm run client:dev   # Vite dev server on :5173 (proxies /api and /bots to :3000)
npm run client:build # Build to dist/client/
```

**Tests:**

```bash
npm test                            # All tests (server + client projects)
npm test -- --testPathPattern=foo   # Run a single test file by name
npm run test:watch                  # Watch mode
npm run test:coverage               # Coverage report
```

**Other:**

```bash
npm run check:circular   # Detect circular imports (madge)
npm run translate        # Run i18n scanner
```

## Path Aliases

Defined in `tsconfig.json` and mirrored in `jest.config.ts`:

- `@root/*` → `src/*`
- `@api/*` → `src/controllers/api/*`
- `@tenthings/*` → `src/controllers/bots/tenthings/*`
- `@models/*` → `src/models/*`
- `@utils/*` → `src/utils/*`

The client (`src/client/`) has its own `tsconfig.json` and Vite config; only `@utils` is aliased there.

## Architecture

This is a personal website (`belgocanadian.com`) that also hosts the **Ten Things** trivia game across three platforms: Telegram bot, Discord bot, and a web UI.

### Backend

**Entry point:** `src/server.ts` — Express app with all routes mounted, WebSocket server initialized, Redis connected, and Discord bot started (production only).

**Two MongoDB connections** (`src/db.ts`): `master` (primary) and `backup`, both configured via env vars. SSH tunnel support is built in for remote connections. Models are keyed to specific connections via `src/models/index.ts`.

**Redis + Bull** (`src/queue.ts`, `src/connections/telegram.ts`): Redis is used for pub/sub (broadcasting WebSocket events) and as the backing store for Bull queues. Telegram message sending is rate-limited via two Bull queues — a global queue (30 msg/sec) and a per-chat queue (20 msg/min).

**Authentication** (`src/auth.ts`): JWT middleware sets `res.locals.isAuthorized` and `res.locals.isAdmin` on every request. Firebase Admin SDK handles token issuance; the frontend uses FirebaseUI for sign-in flows.

### Ten Things Game — Core Concepts

The game is a multiplayer trivia where players guess the 10 items on a list. It runs identically across platforms via a **Provider pattern**.

**Provider pattern** (`src/controllers/bots/tenthings/providers/index.ts`): Every platform implements the `Provider` interface (message, newRound, endOfRound, guessed, rateList, etc.). `game.provider` is set at runtime so game logic in `maingame.ts`, `lists.ts`, etc. is platform-agnostic.

**Game lifecycle** (`src/controllers/bots/tenthings/maingame.ts`):

1. `createMaingame` — creates a new Game document with default settings (adult category disabled, starts with the "Numbers 0–9" list queued)
2. `checkRound` — called after each guess; detects round completion
3. `newRound` — calls `selectList`, then `provider.newRound`
4. On round end: updates list `lastPlayDate`, calls `rateList`, schedules next round

**List selection** (`src/controllers/bots/tenthings/lists.ts` → `selectList`):

1. If `game.pickedLists` is non-empty, serve the first picked list (player queue)
2. Otherwise, random from the unplayed pool filtered by: language, disabled categories, not in `playedLists`/`bannedLists`, and `starred: true` for web platform only
3. If pool is exhausted, reset `playedLists`, increment `game.cycles`, and start a new cycle

**Key models** (`src/models/tenthings/`):

- `list.ts` — The content: `name`, `language`, `categories[]`, `values[]` (≤10 items), engagement stats (`plays`, `skips`, `hints`, `bans`, `picks`), votes, `starred` (curated flag), `difficulty`
- `game.ts` — A game session per platform channel/chat: current `list` snapshot, `playedLists[]`, `bannedLists[]`, `pickedLists[]`, `disabledCategories[]`, `settings` (languages, delays, feature flags)
- `player.ts` — Per-player state within a game: scores, streaks, activity counts, `present` flag

**List quality signal** (`getListScore`): `(upvoteRatio + completionRatio) / 2` — combined from community votes and play-through rate (plays minus skips). Used at end of each round via `rateList`.

### Frontend

React 19 SPA built with Vite. Served from `dist/client/` in production; proxied to `:3000` in dev via `vite.config.ts`.

`AppContext` (`src/client/context/AppContext.tsx`) holds global state: current user, toasts, theme, admin mode. Auth state comes from FirebaseUI → JWT stored and sent as `x-auth` header.

Pages are in `src/client/pages/`. The Ten Things web game (`TenThingsGame.tsx`, `TenThingsPlay.tsx`) connects via WebSocket for real-time updates; events (`tenthings_message`, `new_post`) are published through Redis pub/sub and broadcast by `WebSocketServer`.

### UI conventions

Flat Bootstrap 4 style: white surfaces, 1px borders, no shadows or embossing. Styled-components for component-scoped styles.

### Test layout

Tests live in `src/__tests__/`, split into two Jest projects:

- `server/` and `utils/` → Node environment
- `client/` → jsdom + React Testing Library
