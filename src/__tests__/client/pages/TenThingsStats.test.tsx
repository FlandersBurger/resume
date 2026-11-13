import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useApp } from "../../../client/context/AppContext";
import TenThingsStats from "../../../client/pages/TenThingsStats";
import { getListRanking } from "../../../client/services/tenthings";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("chart.js", () => ({ Chart: { register: jest.fn() } }));
jest.mock("react-chartjs-2", () => ({ Bar: () => null, Line: () => null }));
jest.mock("../../../client/pages/tenthings/ListEditorDrawer", () => ({ ListEditorDrawer: () => null }));
jest.mock("../../../client/hooks/useTenThingsReference", () => ({
  useTenThingsReference: () => ({
    categoryOptions: [],
    languageOptions: [{ code: "NL", name: "Dutch", native: "Nederlands" }],
  }),
}));
jest.mock("../../../client/services/tenthings", () => ({
  LIST_STAT_KEYS: ["mostplayed", "mostskipped"],
  getPlayStats: jest.fn().mockResolvedValue([]),
  getListLanguageStats: jest.fn().mockResolvedValue([]),
  getGameStats: jest.fn().mockResolvedValue([]),
  getSkipRateTrend: jest.fn().mockResolvedValue([]),
  getLowQualityLists: jest.fn().mockResolvedValue([]),
  getListCategoryStats: jest.fn().mockResolvedValue([]),
  getListRanking: jest.fn(),
}));

const mockGetListRanking = getListRanking as jest.Mock;

/** A request that resolves only when the test says so. */
function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((r) => (resolve = r));
  return { promise, resolve };
}

beforeEach(() => {
  (useApp as jest.Mock).mockReturnValue({ ...defaultContextValue, currentUser: { _id: "u1", username: "ann" } });
});

it("doesn't let an older filter's rankings land after the filter changed", async () => {
  const slow = deferred<{ name: string; value: number }[]>();
  mockGetListRanking.mockImplementation((stat: string, { language }: { language: string[] }) => {
    if (!language.length && stat === "mostplayed") return slow.promise;
    return Promise.resolve([{ name: `${language.join("") || "all"} ${stat}`, value: 1 }]);
  });
  render(<TenThingsStats />);

  fireEvent.click(screen.getByRole("button", { name: "NL" }));
  await waitFor(() => expect(screen.getByText("NL mostskipped")).toBeInTheDocument());

  await act(async () => slow.resolve([{ name: "all mostplayed", value: 1 }]));
  expect(screen.queryByText("all mostplayed")).not.toBeInTheDocument();
  expect(screen.queryByText("all mostskipped")).not.toBeInTheDocument();
  expect(screen.getByText("NL mostplayed")).toBeInTheDocument();
  // The old run stopped instead of fetching the rest of its rankings.
  expect(mockGetListRanking).not.toHaveBeenCalledWith("mostskipped", expect.objectContaining({ language: [] }));
});
