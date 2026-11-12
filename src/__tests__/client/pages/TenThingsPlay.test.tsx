import { act, render, screen, waitFor } from "@testing-library/react";
import { useApp } from "../../../client/context/AppContext";
import TenThingsPlay from "../../../client/pages/TenThingsPlay";
import { getTenthings } from "../../../client/services/games";
import { useWebSocket } from "../../../client/hooks/useWebSocket";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

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
const mockUseWebSocket = useWebSocket as jest.MockedFunction<typeof useWebSocket>;

const game = { hints: 0, list: { _id: "l1", name: "Planets", values: [] } };

/** Renders the page and returns the WebSocket handlers it registered. */
const renderPage = async () => {
  const toast = jest.fn();
  mockUseApp.mockReturnValue({ ...defaultContextValue, currentUser: { _id: "u1", username: "ann" }, toast });
  mockGetTenthings.mockResolvedValue(game as never);
  render(<TenThingsPlay />);
  await waitFor(() => expect(screen.getByText("Planets")).toBeInTheDocument());
  const handlers = mockUseWebSocket.mock.calls.at(-1)![0];
  return { toast, handlers };
};

describe("TenThingsPlay", () => {
  beforeEach(() => jest.clearAllMocks());

  it("shows the notices of its Game's Events and reloads the Game once", async () => {
    const { toast, handlers } = await renderPage();
    mockGetTenthings.mockClear();
    await act(async () =>
      handlers.tenthings_events({
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
    await act(async () => handlers.tenthings_events({ webGameId: 2, events: [{ type: "hintGiven" }], notices: ["x"] }));
    expect(toast).not.toHaveBeenCalled();
    expect(mockGetTenthings).not.toHaveBeenCalled();
  });
});
