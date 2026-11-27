import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useApp } from "../../../client/context/AppContext";
import TenThingsGame from "../../../client/pages/TenThingsGame";
import { getGame, updateGameSettings } from "../../../client/services/tenthings";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/pages/tenthings/ListEditorDrawer", () => ({ ListEditorDrawer: () => null }));
jest.mock("../../../client/hooks/useTenThingsReference", () => ({
  useTenThingsReference: () => ({
    categoryOptions: [],
    languageOptions: [
      { code: "EN", name: "English", native: "English" },
      { code: "NL", name: "Dutch", native: "Nederlands" },
    ],
  }),
}));
jest.mock("../../../client/services/tenthings", () => ({
  getMyGames: jest.fn().mockResolvedValue([]),
  getGame: jest.fn(),
  updateGameCategory: jest.fn(),
  updateGameSettings: jest.fn(),
}));

const mockGetGame = getGame as jest.Mock;
const mockUpdateSettings = updateGameSettings as jest.Mock;

const renderPage = (isAdmin: boolean) => {
  (useApp as jest.Mock).mockReturnValue({
    ...defaultContextValue,
    isAdmin,
    currentUser: { _id: "u1", username: "ann", telegramId: 1 },
  });
  return render(
    <MemoryRouter initialEntries={["/tenthings-game/42"]}>
      <Routes>
        <Route path="/tenthings-game/:gameId" element={<TenThingsGame />} />
      </Routes>
    </MemoryRouter>,
  );
};

beforeEach(() => {
  mockGetGame.mockResolvedValue({ platform: "telegram", settings: { language: "EN", languages: ["EN"] }, players: [] });
});

it("shows a player the Game's Trivia Languages", async () => {
  mockGetGame.mockResolvedValue({ platform: "telegram", settings: { languages: ["EN", "NL"] }, players: [] });
  renderPage(false);
  expect(await screen.findByText("EN, NL")).toBeInTheDocument();
});

it("lets an admin add a Trivia Language but not remove the last one", async () => {
  mockUpdateSettings.mockResolvedValue({ languages: ["EN", "NL"] });
  renderPage(true);

  const en = await screen.findByRole("button", { name: "EN" });
  expect(en).toBeDisabled();

  fireEvent.click(screen.getByRole("button", { name: "NL" }));
  expect(mockUpdateSettings).toHaveBeenCalledWith("42", { languages: ["EN", "NL"] });
  await waitFor(() => expect(screen.getByRole("button", { name: "EN" })).toBeEnabled());
  expect(screen.getByRole("button", { name: "NL" })).toHaveClass("btn-primary");
});
