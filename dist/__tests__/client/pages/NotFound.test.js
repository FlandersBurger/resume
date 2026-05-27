"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
const NotFound_1 = __importDefault(require("../../../client/pages/NotFound"));
describe("NotFound", () => {
  it("renders the 404 heading", () => {
    (0, react_1.render)(
      <react_router_dom_1.MemoryRouter>
        <NotFound_1.default />
      </react_router_dom_1.MemoryRouter>,
    );
    expect(react_1.screen.getByText("404 - Page Not Found")).toBeInTheDocument();
  });
  it("renders a link to home", () => {
    (0, react_1.render)(
      <react_router_dom_1.MemoryRouter>
        <NotFound_1.default />
      </react_router_dom_1.MemoryRouter>,
    );
    const link = react_1.screen.getByRole("link", { name: "Go Home" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/home");
  });
});
//# sourceMappingURL=NotFound.test.js.map
