import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Workout from "../../../client/pages/Workout";

// jsdom has no HTMLMediaElement.play — mock Audio
beforeAll(() => {
  (global as any).Audio = jest.fn().mockImplementation(() => ({
    play: jest.fn().mockResolvedValue(undefined),
  }));
});

describe("Workout page", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders Exercise Time and Rest Time inputs", () => {
    render(<Workout />);
    expect(screen.getByDisplayValue("30")).toBeInTheDocument(); // default exercise time
    expect(screen.getByDisplayValue("10")).toBeInTheDocument(); // default rest time
  });

  it("renders the Start button initially", () => {
    render(<Workout />);
    expect(screen.getByRole("button", { name: "Start" })).toBeInTheDocument();
  });

  it("shows the Stop button after clicking Start", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start" }));
    expect(screen.getByRole("button", { name: "Stop" })).toBeInTheDocument();
  });

  it("hides the time inputs while workout is running", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start" }));
    expect(screen.queryByDisplayValue("30")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("10")).not.toBeInTheDocument();
  });

  it("returns to Start button after clicking Stop", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start" }));
    await userEvent.click(screen.getByRole("button", { name: "Stop" }));
    expect(screen.getByRole("button", { name: "Start" })).toBeInTheDocument();
  });

  it("shows inputs again after stopping", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start" }));
    await userEvent.click(screen.getByRole("button", { name: "Stop" }));
    expect(screen.getByDisplayValue("30")).toBeInTheDocument();
  });

  it("shows the first exercise name after starting (with fake timers)", () => {
    jest.useFakeTimers();
    render(<Workout />);
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Start" }));
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Jumping Jacks/)).toBeInTheDocument();
    jest.useRealTimers();
  });
});
