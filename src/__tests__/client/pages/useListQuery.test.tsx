import { ReactNode } from "react";
import { act, renderHook, waitFor } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { useApp } from "../../../client/context/AppContext";
import { PAGE_SIZE, useListQuery } from "../../../client/pages/tenthings/useListQuery";
import { getLists } from "../../../client/services/tenthings";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/tenthings", () => ({ getLists: jest.fn() }));

const mockGetLists = getLists as jest.Mock;

const lists = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => ({ _id: `${prefix}${i}`, name: `${prefix}${i}` }));

/** A request that resolves only when the test says so. */
function deferred() {
  let resolve!: (value: unknown) => void;
  const promise = new Promise((r) => (resolve = r));
  return { promise, resolve };
}

function renderQuery(url = "/tenthings-lists") {
  const location = { current: "" };
  const LocationProbe = () => {
    const l = useLocation();
    location.current = l.search;
    return null;
  };
  const wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[url]}>
      {children}
      <LocationProbe />
    </MemoryRouter>
  );
  const hook = renderHook(() => useListQuery(), { wrapper });
  return { ...hook, location };
}

beforeEach(() => {
  jest.clearAllMocks();
  (useApp as jest.Mock).mockReturnValue({ ...defaultContextValue, toast: jest.fn() });
});

describe("useListQuery", () => {
  it("loads the first page for the filter in the URL", async () => {
    mockGetLists.mockResolvedValue({ lists: lists("a", 3), count: 3 });
    const { result } = renderQuery("/tenthings-lists?lang=NL&sort=name&dir=asc");

    await waitFor(() => expect(result.current.lists).toHaveLength(3));
    expect(result.current.filter).toMatchObject({ languages: ["NL"], sortBy: "name", sortDir: "asc" });
    expect(mockGetLists).toHaveBeenCalledWith(
      expect.objectContaining({ page: 1, limit: PAGE_SIZE, language: ["NL"], sortBy: "name", orderBy: "asc" }),
    );
    expect(result.current.count).toBe(3);
    expect(result.current.hasMore).toBe(false);
  });

  it("writes filter changes to the URL, keeping the open List", async () => {
    mockGetLists.mockResolvedValue({ lists: [], count: 0 });
    const { result, location } = renderQuery("/tenthings-lists?list=abc");
    await waitFor(() => expect(mockGetLists).toHaveBeenCalled());

    act(() => result.current.setFilter({ categories: ["music"], mine: true }));
    await waitFor(() => expect(location.current).toContain("cat=music"));
    expect(location.current).toContain("list=abc");
    expect(location.current).toContain("mine=1");
  });

  it("drops a slow response for a filter that has since changed", async () => {
    const slow = deferred();
    mockGetLists.mockReturnValueOnce(slow.promise).mockResolvedValue({ lists: lists("new", 2), count: 2 });
    const { result } = renderQuery();

    act(() => result.current.setFilter({ search: "rivers" }));
    await waitFor(() => expect(result.current.lists.map((l) => l._id)).toEqual(["new0", "new1"]));

    await act(async () => slow.resolve({ lists: lists("old", 5), count: 5 }));
    expect(result.current.lists.map((l) => l._id)).toEqual(["new0", "new1"]);
    expect(result.current.count).toBe(2);
  });

  it("serves load more from the prefetched page, with the same name search", async () => {
    mockGetLists.mockImplementation(async ({ page }) => ({ lists: lists(`p${page}-`, page === 1 ? PAGE_SIZE : 3), count: 53 }));
    const { result } = renderQuery("/tenthings-lists?search=river");
    await waitFor(() => expect(result.current.hasMore).toBe(true));
    await waitFor(() => expect(mockGetLists).toHaveBeenCalledTimes(2)); // page 1 + prefetch of page 2

    for (const [options] of mockGetLists.mock.calls) {
      expect(options).toMatchObject({ name: "river" });
      expect(options).not.toHaveProperty("search");
    }

    await act(async () => result.current.loadMore());
    expect(mockGetLists).toHaveBeenCalledTimes(2); // no new request
    expect(result.current.lists).toHaveLength(PAGE_SIZE + 3);
    expect(result.current.count).toBe(53);
    expect(result.current.hasMore).toBe(false);
  });

  it("doesn't serve a page prefetched for an older filter", async () => {
    mockGetLists.mockImplementation(async ({ page, language }) => ({
      lists: lists(`${language.join("") || "all"}-p${page}-`, page === 1 ? PAGE_SIZE : 1),
      count: 51,
    }));
    const { result } = renderQuery();
    await waitFor(() => expect(mockGetLists).toHaveBeenCalledTimes(2));

    act(() => result.current.setFilter({ languages: ["NL"] }));
    await waitFor(() => expect(result.current.lists[0]._id).toBe("NL-p1-0"));
    await act(async () => result.current.loadMore());

    expect(result.current.lists.at(-1)!._id).toBe("NL-p2-0");
  });

  it("tells the user when the Lists can't be loaded", async () => {
    const toast = jest.fn();
    (useApp as jest.Mock).mockReturnValue({ ...defaultContextValue, toast });
    mockGetLists.mockRejectedValue(new Error("500"));
    const { result } = renderQuery();
    await waitFor(() => expect(toast).toHaveBeenCalledWith("Failed to load lists"));
    expect(result.current.loading).toBe(false);
  });
});
