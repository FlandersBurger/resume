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
  it("renders the Charades Generator heading", () => {
    render(<Charades />);
    expect(screen.getByText("Charades Generator")).toBeInTheDocument();
  });

  it("renders category buttons after data loads", async () => {
    render(<Charades />);
    await waitFor(() => expect(screen.getByText("Animals")).toBeInTheDocument());
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("shows no word initially", () => {
    render(<Charades />);
    // No h2 with a word yet
    expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  it("shows a word from the selected category when a button is clicked", async () => {
    render(<Charades />);
    await waitFor(() => expect(screen.getByText("Animals")).toBeInTheDocument());
    await userEvent.click(screen.getByText("Animals"));
    const word = screen.getByRole("heading", { level: 2 });
    expect(charadesData.Animals).toContain(word.textContent);
  });

  it("changes the word when a different category is clicked", async () => {
    render(<Charades />);
    await waitFor(() => expect(screen.getByText("Animals")).toBeInTheDocument());
    await userEvent.click(screen.getByText("Animals"));
    await userEvent.click(screen.getByText("Actions"));
    const word = screen.getByRole("heading", { level: 2 });
    expect(charadesData.Actions).toContain(word.textContent);
  });

  it("fetches /charades.json on mount", async () => {
    render(<Charades />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith("/charades.json"));
  });
});
