"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const AppContext_1 = require("../../client/context/AppContext");
const ToastContainer_1 = require("../../client/components/ToastContainer");
const AppContextMock_1 = require("../__mocks__/AppContextMock");
jest.mock("../../client/context/AppContext", () => ({ useApp: jest.fn() }));
const mockUseApp = AppContext_1.useApp;
function renderToasts(overrides = {}) {
  mockUseApp.mockReturnValue({ ...AppContextMock_1.defaultContextValue, ...overrides });
  return (0, react_1.render)(<ToastContainer_1.ToastContainer />);
}
describe("ToastContainer", () => {
  it("renders nothing when there are no toasts", () => {
    const { container } = renderToasts({ toasts: [] });
    expect(container.querySelector("#toast")?.children.length).toBe(0);
  });
  it("renders a single toast message", () => {
    renderToasts({ toasts: [{ id: 1, message: "Hello!" }] });
    expect(react_1.screen.getByText("Hello!")).toBeInTheDocument();
  });
  it("renders multiple toasts", () => {
    renderToasts({
      toasts: [
        { id: 1, message: "First" },
        { id: 2, message: "Second" },
      ],
    });
    expect(react_1.screen.getByText("First")).toBeInTheDocument();
    expect(react_1.screen.getByText("Second")).toBeInTheDocument();
  });
  it("renders each toast in its own element", () => {
    const { container } = renderToasts({
      toasts: [
        { id: 1, message: "A" },
        { id: 2, message: "B" },
        { id: 3, message: "C" },
      ],
    });
    expect(container.querySelector("#toast")?.children.length).toBe(3);
  });
});
//# sourceMappingURL=ToastContainer.test.js.map
