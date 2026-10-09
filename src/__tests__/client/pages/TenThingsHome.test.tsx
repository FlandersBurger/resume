import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { useApp } from "../../../client/context/AppContext";
import TenThingsHome from "../../../client/pages/tenthings/TenThingsHome";
import { getLists, getListTotal, getLanguages, getCategories } from "../../../client/services/tenthings";
import { defaultContextValue, AppContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/tenthings", () => ({
  getLists: jest.fn(),
  getListTotal: jest.fn(),
  getLanguages: jest.fn(),
  getCategories: jest.fn(),
}));
jest.mock("react-helmet-async", () => ({ Helmet: ({ children }: any) => children ?? null }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;

function Location() {
  const { pathname, search } = useLocation();
  return <p data-testid="location">{pathname + search}</p>;
}

function renderHome(path = "/tenthings", overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/tenthings" element={<TenThingsHome />} />
        <Route path="/tenthings-lists" element={<Location />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("TenThingsHome", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getListTotal as jest.Mock).mockResolvedValue(4321);
    (getLanguages as jest.Mock).mockResolvedValue([
      { code: "EN", name: "English", native: "English" },
      { code: "NL", name: "Dutch", native: "Nederlands" },
    ]);
    (getCategories as jest.Mock).mockResolvedValue([
      { value: "geo", label: "Geography", subcategories: [{ value: "geo.cap", label: "Capitals" }] },
      { value: "music", label: "Music" },
    ]);
    (getLists as jest.Mock).mockResolvedValue({
      lists: [{ _id: "l1", name: "Belgian beers", language: "NL" }],
      count: 1,
    });
    jest.spyOn(navigator, "language", "get").mockReturnValue("nl-BE");
  });

  it("shows live counts and random high-quality lists", async () => {
    renderHome();
    expect(await screen.findByText("4,321")).toBeInTheDocument();
    expect(screen.getAllByText("2")).toHaveLength(2); // languages and leaf categories
    const fresh = await screen.findByText("Belgian beers");
    expect(fresh.closest("a")).toHaveAttribute("href", "/tenthings-lists?list=l1");

    expect(getLists).toHaveBeenCalledWith(
      expect.objectContaining({
        language: ["NL"],
        quality: ["high"],
        sortBy: "random",
        categoriesNot: ["culture.adult"],
      }),
    );
    expect(screen.getByText(/See all lists like these/).closest("a")).toHaveAttribute(
      "href",
      "/tenthings-lists?lang=NL&quality=high",
    );
  });

  it("falls back to English when the visitor's language has no high-quality lists", async () => {
    (getLists as jest.Mock)
      .mockResolvedValueOnce({ lists: [], count: 0 })
      .mockResolvedValueOnce({ lists: [{ _id: "l2", name: "Planets", language: "EN" }], count: 1 });
    renderHome();
    expect(await screen.findByText("Planets")).toBeInTheDocument();
    expect(getLists).toHaveBeenLastCalledWith(expect.objectContaining({ language: ["EN"] }));
  });

  it("offers login to anonymous visitors", () => {
    const openLogin = jest.fn();
    renderHome("/tenthings", { currentUser: null, openLogin });
    screen.getByText("Log in to contribute").click();
    expect(openLogin).toHaveBeenCalled();
  });

  it("redirects old list links to the lists page", () => {
    renderHome("/tenthings?list=abc");
    expect(screen.getByTestId("location")).toHaveTextContent("/tenthings-lists?list=abc");
    expect(getListTotal).not.toHaveBeenCalled();
  });
});
