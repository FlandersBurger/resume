"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const Workout_1 = __importDefault(require("../../../client/pages/Workout"));
beforeAll(() => {
  global.Audio = jest.fn().mockImplementation(() => ({
    play: jest.fn().mockResolvedValue(undefined),
  }));
});
describe("Workout page", () => {
  beforeEach(() => jest.clearAllMocks());
  it("renders Exercise Time and Rest Time inputs", () => {
    (0, react_1.render)(<Workout_1.default />);
    expect(react_1.screen.getByDisplayValue("30")).toBeInTheDocument();
    expect(react_1.screen.getByDisplayValue("10")).toBeInTheDocument();
  });
  it("renders the Start Workout button initially", () => {
    (0, react_1.render)(<Workout_1.default />);
    expect(react_1.screen.getByRole("button", { name: "Start Workout" })).toBeInTheDocument();
  });
  it("changes button to Stop Workout after clicking Start", async () => {
    (0, react_1.render)(<Workout_1.default />);
    await user_event_1.default.click(react_1.screen.getByRole("button", { name: "Start Workout" }));
    expect(react_1.screen.getByRole("button", { name: "Stop Workout" })).toBeInTheDocument();
  });
  it("disables the time inputs while workout is running", async () => {
    (0, react_1.render)(<Workout_1.default />);
    await user_event_1.default.click(react_1.screen.getByRole("button", { name: "Start Workout" }));
    expect(react_1.screen.getByDisplayValue("30")).toBeDisabled();
    expect(react_1.screen.getByDisplayValue("10")).toBeDisabled();
  });
  it("returns to Start Workout after clicking Stop", async () => {
    (0, react_1.render)(<Workout_1.default />);
    await user_event_1.default.click(react_1.screen.getByRole("button", { name: "Start Workout" }));
    await user_event_1.default.click(react_1.screen.getByRole("button", { name: "Stop Workout" }));
    expect(react_1.screen.getByRole("button", { name: "Start Workout" })).toBeInTheDocument();
  });
  it("re-enables inputs after stopping", async () => {
    (0, react_1.render)(<Workout_1.default />);
    await user_event_1.default.click(react_1.screen.getByRole("button", { name: "Start Workout" }));
    await user_event_1.default.click(react_1.screen.getByRole("button", { name: "Stop Workout" }));
    expect(react_1.screen.getByDisplayValue("30")).not.toBeDisabled();
  });
  it("shows the first exercise name after starting (with fake timers)", () => {
    jest.useFakeTimers();
    (0, react_1.render)(<Workout_1.default />);
    (0, react_1.act)(() => {
      react_1.fireEvent.click(react_1.screen.getByRole("button", { name: "Start Workout" }));
    });
    (0, react_1.act)(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(react_1.screen.getByText(/Jumping Jacks/)).toBeInTheDocument();
    jest.useRealTimers();
  });
});
//# sourceMappingURL=Workout.test.js.map
