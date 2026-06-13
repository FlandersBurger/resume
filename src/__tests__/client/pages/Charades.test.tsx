import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Charades from "../../../client/pages/Charades";

const charadesData = {
  Animals: ["Dog", "Cat", "Bird"],
  Actions: ["Run", "Jump", "Swim"],
};

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(charadesData),
  } as any);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Charades page", () => {
  it("renders the Charades heading", () => {
    render(<Charades />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Charades");
  });

  it("renders category buttons after data loads", async () => {
    render(<Charades />);
    await waitFor(() => expect(screen.getByText("Animals")).toBeInTheDocument());
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("shows no word initially", async () => {
    render(<Charades />);
    await waitFor(() => expect(screen.getByText("Animals")).toBeInTheDocument());
    // Word card only appears after a category is selected
    expect(screen.queryByText("Next word")).not.toBeInTheDocument();
  });

  it("shows a word from the selected category when a button is clicked", async () => {
    render(<Charades />);
    await waitFor(() => expect(screen.getByText("Animals")).toBeInTheDocument());
    await userEvent.click(screen.getByText("Animals"));
    expect(screen.getByText("Next word")).toBeInTheDocument();
    const shown = charadesData.Animals.find((w) => screen.queryByText(w));
    expect(shown).toBeDefined();
  });

  it("shows a word from the new category when switching", async () => {
    render(<Charades />);
    await waitFor(() => expect(screen.getByText("Animals")).toBeInTheDocument());
    await userEvent.click(screen.getByText("Animals"));
    await userEvent.click(screen.getByText("Actions"));
    const shown = charadesData.Actions.find((w) => screen.queryByText(w));
    expect(shown).toBeDefined();
  });

  it("fetches /charades.json on mount", async () => {
    render(<Charades />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith("/charades.json"));
  });
});
