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

  it("renders the Start Workout button initially", () => {
    render(<Workout />);
    expect(screen.getByRole("button", { name: "Start Workout" })).toBeInTheDocument();
  });

  it("changes button to Stop Workout after clicking Start", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start Workout" }));
    expect(screen.getByRole("button", { name: "Stop Workout" })).toBeInTheDocument();
  });

  it("disables the time inputs while workout is running", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start Workout" }));
    expect(screen.getByDisplayValue("30")).toBeDisabled();
    expect(screen.getByDisplayValue("10")).toBeDisabled();
  });

  it("returns to Start Workout after clicking Stop", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start Workout" }));
    await userEvent.click(screen.getByRole("button", { name: "Stop Workout" }));
    expect(screen.getByRole("button", { name: "Start Workout" })).toBeInTheDocument();
  });

  it("re-enables inputs after stopping", async () => {
    render(<Workout />);
    await userEvent.click(screen.getByRole("button", { name: "Start Workout" }));
    await userEvent.click(screen.getByRole("button", { name: "Stop Workout" }));
    expect(screen.getByDisplayValue("30")).not.toBeDisabled();
  });

  it("shows the first exercise name after starting (with fake timers)", () => {
    jest.useFakeTimers();
    render(<Workout />);
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Start Workout" }));
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    // First exercise is Jumping Jacks
    expect(screen.getByText(/Jumping Jacks/)).toBeInTheDocument();
    jest.useRealTimers();
  });
});
