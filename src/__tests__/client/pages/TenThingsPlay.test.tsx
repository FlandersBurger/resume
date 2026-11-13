import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useApp } from "../../../client/context/AppContext";
import TenThingsPlay from "../../../client/pages/TenThingsPlay";
import { answerTenthings, getTenthings } from "../../../client/services/games";
import { useWebSocket } from "../../../client/hooks/useWebSocket";
import { defaultContextValue } from "../../__mocks__/AppContextMock";
import type { WebGameView } from "../../../utils/tenthings-web";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/games", () => ({
  getTenthings: jest.fn(),
  answerTenthings: jest.fn(),
  getTenthingsHint: jest.fn(),
  skipTenthingsList: jest.fn(),
}));
jest.mock("../../../client/hooks/useWebSocket", () => ({ useWebSocket: jest.fn() }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;
const mockGetTenthings = getTenthings as jest.MockedFunction<typeof getTenthings>;
const mockAnswer = answerTenthings as jest.MockedFunction<typeof answerTenthings>;
const mockUseWebSocket = useWebSocket as jest.MockedFunction<typeof useWebSocket>;

const view = (overrides: Partial<WebGameView> = {}): WebGameView => ({
  webGameId: 1,
  hints: 0,
  hintsLeft: 6,
  list: {
    _id: "l1",
    name: "Planets",
    creator: "maker",
    answers: [
      { _id: "a1", maskedValue: "Venus", guessed: true, value: "Venus", guesser: "Ann", blurb: "Hot", blurbType: "text" },
      { _id: "a2", maskedValue: "J******", guessed: false },
    ],
  },
  ...overrides,
});

/** A request that resolves only when the test says so. */
function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((r) => (resolve = r));
  return { promise, resolve };
}

/** Renders the page and returns the WebSocket handlers it registered. */
const renderPage = async (first = view()) => {
  const toast = jest.fn();
  mockUseApp.mockReturnValue({ ...defaultContextValue, currentUser: { _id: "u1", username: "ann" }, toast });
  mockGetTenthings.mockResolvedValue(first);
  render(<TenThingsPlay />);
  await waitFor(() => expect(screen.getByText("Planets")).toBeInTheDocument());
  const handlers = () => mockUseWebSocket.mock.calls.at(-1)![0];
  return { toast, handlers };
};

describe("TenThingsPlay", () => {
  beforeEach(() => jest.clearAllMocks());

  it("shows guessed Answers with their guesser and Blurb, and unguessed ones masked", async () => {
    await renderPage();
    expect(screen.getByText("Venus")).toBeInTheDocument();
    expect(screen.getByText("Ann")).toBeInTheDocument();
    expect(screen.getByText("Hot")).toBeInTheDocument();
    expect(screen.getByText("J******")).toBeInTheDocument();
    expect(screen.getByText("1 / 2")).toBeInTheDocument();
    expect(screen.getByText("maker")).toBeInTheDocument();
  });

  it("shows the notices of its Game's Events and reloads the Game once", async () => {
    const { toast, handlers } = await renderPage();
    mockGetTenthings.mockClear();
    await act(async () =>
      handlers().tenthings_events({
        webGameId: 1,
        events: [{ type: "answerGuessed" }, { type: "roundCompleted" }],
        notices: ["Ann guessed Venus", "Round over"],
      }),
    );
    expect(toast.mock.calls).toEqual([["Ann guessed Venus"], ["Round over"]]);
    expect(mockGetTenthings).toHaveBeenCalledTimes(1);
  });

  it("ignores another web Game's Events", async () => {
    const { toast, handlers } = await renderPage();
    mockGetTenthings.mockClear();
    await act(async () => handlers().tenthings_events({ webGameId: 2, events: [{ type: "hintGiven" }], notices: ["x"] }));
    expect(toast).not.toHaveBeenCalled();
    expect(mockGetTenthings).not.toHaveBeenCalled();
  });

  it("keeps the latest reload when an older one answers last", async () => {
    const { handlers } = await renderPage();
    const older = deferred<WebGameView>();
    mockGetTenthings.mockReturnValueOnce(older.promise).mockResolvedValueOnce(view({ hints: 2, hintsLeft: 4 }));
    const event = { webGameId: 1, events: [{ type: "hintGiven" }], notices: [] };
    await act(async () => {
      handlers().tenthings_events(event);
      handlers().tenthings_events(event);
    });
    await waitFor(() => expect(screen.getByText(/Hint \(2\/6\)/)).toBeInTheDocument());

    await act(async () => older.resolve(view({ hints: 1, hintsLeft: 5 })));
    expect(screen.getByText(/Hint \(2\/6\)/)).toBeInTheDocument();
  });

  it("turns the Hint button off once no Hints are left", async () => {
    await renderPage(view({ hints: 6, hintsLeft: 0 }));
    expect(screen.getByRole("button", { name: /Hint/ })).toBeDisabled();
  });

  it("sends a guess, and says so when it can't", async () => {
    const { toast } = await renderPage();
    mockAnswer.mockRejectedValueOnce(new Error("500"));
    const input = screen.getByPlaceholderText(/Type your guess/);
    fireEvent.change(input, { target: { value: "Jupiter" } });
    await act(async () => fireEvent.keyDown(input, { key: "Enter" }));
    expect(mockAnswer).toHaveBeenCalledWith(1, "Jupiter");
    expect(toast).toHaveBeenCalledWith("Couldn't send your guess");
  });

  it("loads nothing without a signed-in User", () => {
    mockUseApp.mockReturnValue({ ...defaultContextValue, currentUser: null, toast: jest.fn() });
    render(<TenThingsPlay />);
    expect(mockGetTenthings).not.toHaveBeenCalled();
  });
});
