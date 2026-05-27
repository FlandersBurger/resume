import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useApp } from "../../client/context/AppContext";
import LoginModal from "../../client/components/LoginModal";
import { defaultContextValue, AppContextValue } from "../__mocks__/AppContextMock";

jest.mock("../../client/context/AppContext", () => ({ useApp: jest.fn() }));

// firebaseui tries to access the DOM and network; stub it out entirely
jest.mock("../../client/hooks/useFirebaseUI", () => ({
  useFirebaseUI: jest.fn(),
}));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;

function renderLoginModal(overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(<LoginModal />);
}

describe("LoginModal", () => {
  it("renders nothing when showLogin is false", () => {
    const { container } = renderLoginModal({ showLogin: false });
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the modal when showLogin is true", () => {
    renderLoginModal({ showLogin: true });
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("renders the firebaseui container element", () => {
    renderLoginModal({ showLogin: true });
    expect(document.getElementById("firebaseui-modal-container")).toBeInTheDocument();
  });

  it("calls closeLogin when the backdrop is clicked", async () => {
    const closeLogin = jest.fn();
    renderLoginModal({ showLogin: true, closeLogin });
    await userEvent.click(document.querySelector(".modal-backdrop")!);
    expect(closeLogin).toHaveBeenCalledTimes(1);
  });

  it("calls closeLogin when the × button is clicked", async () => {
    const closeLogin = jest.fn();
    renderLoginModal({ showLogin: true, closeLogin });
    await userEvent.click(screen.getByLabelText("Close"));
    expect(closeLogin).toHaveBeenCalledTimes(1);
  });
});
