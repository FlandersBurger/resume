import { render, screen } from "@testing-library/react";
import { useApp } from "../../client/context/AppContext";
import { ToastContainer } from "../../client/components/ToastContainer";
import { defaultContextValue, AppContextValue } from "../__mocks__/AppContextMock";

jest.mock("../../client/context/AppContext", () => ({ useApp: jest.fn() }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;

function renderToasts(overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(<ToastContainer />);
}

describe("ToastContainer", () => {
  it("renders nothing when there are no toasts", () => {
    const { container } = renderToasts({ toasts: [] });
    expect(container.querySelector("#toast")?.children.length).toBe(0);
  });

  it("renders a single toast message", () => {
    renderToasts({ toasts: [{ id: 1, message: "Hello!" }] });
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });

  it("renders multiple toasts", () => {
    renderToasts({
      toasts: [
        { id: 1, message: "First" },
        { id: 2, message: "Second" },
      ],
    });
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
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
