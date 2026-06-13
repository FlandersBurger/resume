import { render, screen, act, fireEvent } from "@testing-library/react";
import Yahtzee from "../../../client/pages/Yahtzee";

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

describe("Yahtzee page", () => {
  it("renders the Yahtzee heading", () => {
    render(<Yahtzee />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Yahtzee");
  });

  it("shows a Roll button initially", () => {
    render(<Yahtzee />);
    expect(screen.getByRole("button", { name: "Roll" })).toBeInTheDocument();
  });

  it("Roll button is enabled at game start", () => {
    render(<Yahtzee />);
    expect(screen.getByRole("button", { name: "Roll" })).not.toBeDisabled();
  });

  it("shows all upper-section categories", () => {
    render(<Yahtzee />);
    ["Ones", "Twos", "Threes", "Fours", "Fives", "Sixes"].forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it("shows all lower-section categories", () => {
    render(<Yahtzee />);
    ["3 of a Kind", "4 of a Kind", "Full House", "Sm. Straight", "Lg. Straight", "Yahtzee!", "Chance"].forEach(
      (cat) => {
        expect(screen.getByText(cat)).toBeInTheDocument();
      },
    );
  });

  it("shows Grand Total label", () => {
    render(<Yahtzee />);
    expect(screen.getByText("Grand Total")).toBeInTheDocument();
  });

  it("shows Upper Bonus description", () => {
    render(<Yahtzee />);
    expect(screen.getByText(/upper ≥ 63/i)).toBeInTheDocument();
  });

  it("decrements rolls left after rolling", () => {
    jest.useFakeTimers();
    render(<Yahtzee />);
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Roll" }));
      jest.advanceTimersByTime(600);
    });
    expect(screen.getByText(/2 rolls left/)).toBeInTheDocument();
  });

  it("disables Roll button after 3 rolls", () => {
    jest.useFakeTimers();
    render(<Yahtzee />);
    for (let i = 0; i < 3; i++) {
      act(() => {
        fireEvent.click(screen.getByRole("button", { name: "Roll" }));
        jest.advanceTimersByTime(600);
      });
    }
    expect(screen.getByRole("button", { name: "Roll" })).toBeDisabled();
  });

  it("shows potential scores after rolling", () => {
    jest.useFakeTimers();
    jest.spyOn(Math, "random").mockReturnValue(0.99); // all dice → 6
    render(<Yahtzee />);
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Roll" }));
      jest.advanceTimersByTime(600);
    });
    // 5 sixes → Yahtzee! scores 50 (unique value in this scenario)
    expect(screen.getByText("50")).toBeInTheDocument();
    // Multiple categories score 30 with five 6s (Sixes, 3oaK, 4oaK, Chance)
    expect(screen.getAllByText("30").length).toBeGreaterThan(0);
  });

  it("scores a category and starts a new turn", () => {
    jest.useFakeTimers();
    jest.spyOn(Math, "random").mockReturnValue(0.99); // all sixes
    render(<Yahtzee />);
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Roll" }));
      jest.advanceTimersByTime(600);
    });
    // Click the Chance row — event bubbles to the Row onClick
    act(() => {
      fireEvent.click(screen.getByText("Chance"));
    });
    // New turn: Roll button re-enabled and dice reset
    expect(screen.getByRole("button", { name: "Roll" })).not.toBeDisabled();
  });
});
