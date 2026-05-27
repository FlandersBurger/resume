"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const Charades_1 = __importDefault(require("../../../client/pages/Charades"));
const charadesData = {
  Animals: ["Dog", "Cat", "Bird"],
  Actions: ["Run", "Jump", "Swim"],
};
beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(charadesData),
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});
describe("Charades page", () => {
  it("renders the Charades Generator heading", () => {
    (0, react_1.render)(<Charades_1.default />);
    expect(react_1.screen.getByText("Charades Generator")).toBeInTheDocument();
  });
  it("renders category buttons after data loads", async () => {
    (0, react_1.render)(<Charades_1.default />);
    await (0, react_1.waitFor)(() => expect(react_1.screen.getByText("Animals")).toBeInTheDocument());
    expect(react_1.screen.getByText("Actions")).toBeInTheDocument();
  });
  it("shows no word initially", () => {
    (0, react_1.render)(<Charades_1.default />);
    expect(react_1.screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });
  it("shows a word from the selected category when a button is clicked", async () => {
    (0, react_1.render)(<Charades_1.default />);
    await (0, react_1.waitFor)(() => expect(react_1.screen.getByText("Animals")).toBeInTheDocument());
    await user_event_1.default.click(react_1.screen.getByText("Animals"));
    const word = react_1.screen.getByRole("heading", { level: 2 });
    expect(charadesData.Animals).toContain(word.textContent);
  });
  it("changes the word when a different category is clicked", async () => {
    (0, react_1.render)(<Charades_1.default />);
    await (0, react_1.waitFor)(() => expect(react_1.screen.getByText("Animals")).toBeInTheDocument());
    await user_event_1.default.click(react_1.screen.getByText("Animals"));
    await user_event_1.default.click(react_1.screen.getByText("Actions"));
    const word = react_1.screen.getByRole("heading", { level: 2 });
    expect(charadesData.Actions).toContain(word.textContent);
  });
  it("fetches /charades.json on mount", async () => {
    (0, react_1.render)(<Charades_1.default />);
    await (0, react_1.waitFor)(() => expect(global.fetch).toHaveBeenCalledWith("/charades.json"));
  });
});
//# sourceMappingURL=Charades.test.js.map
