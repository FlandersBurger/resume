// The contract between the server and the web Ten Things page. Types only, so both sides can
// import it: the server builds these, the browser reads them.

/** The WebSocket topic a web Game's Events go out on. */
export const WEB_EVENTS_TOPIC = "tenthings_events";

/** Sent once an Action on a web Game has run: its Events and what a Player should read about them. */
export type WebEventsMessage<E extends { type: string } = { type: string }> = {
  webGameId: number;
  events: E[];
  notices: string[];
};

export type WebBlurbType = "text" | "image" | "youtube" | "spotify" | "link";

/**
 * An Answer as a Player may see it. `maskedValue` is always there; the value and the Blurb only
 * once the Answer is guessed.
 */
export type WebAnswerView =
  | { _id: string; maskedValue: string; guessed: false }
  | {
      _id: string;
      maskedValue: string;
      guessed: true;
      value: string;
      blurb?: string;
      blurbType?: WebBlurbType;
      guesser: string;
    };

/** A web Game as a Player may see it. */
export type WebGameView = {
  webGameId: number;
  hints: number;
  hintsLeft: number;
  list: {
    _id?: string;
    name?: string;
    description?: string;
    /** The creator's username. */
    creator?: string;
    answers: WebAnswerView[];
  };
};
