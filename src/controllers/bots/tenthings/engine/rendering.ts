// The interface every platform renderer implements. Separate from ./renderers, which loads
// the renderers, so a renderer can depend on it without an import cycle.

import type { HydratedDocument } from "mongoose";
import type { IGame } from "@models/tenthings/game";
import type { Action, ActionOrigin } from "./actions";
import type { EngineEvent } from "./events";

/** Shows a Game's players what an Action did. `game` is the Game as the Action left it. */
export type Renderer = (
  game: HydratedDocument<IGame>,
  events: EngineEvent[],
  context: { action: Action; origin: ActionOrigin },
) => Promise<void>;
