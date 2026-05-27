"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const AppContext_1 = require("../../../client/context/AppContext");
const email_1 = require("../../../client/services/email");
const Contact_1 = __importDefault(require("../../../client/pages/Contact"));
const AppContextMock_1 = require("../../__mocks__/AppContextMock");
jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/email", () => ({ sendEmail: jest.fn() }));
jest.mock("react-helmet-async", () => ({ Helmet: () => null }));
const mockUseApp = AppContext_1.useApp;
const mockSendEmail = email_1.sendEmail;
function renderContact(overrides = {}) {
  mockUseApp.mockReturnValue({ ...AppContextMock_1.defaultContextValue, ...overrides });
  return (0, react_1.render)(<Contact_1.default />);
}
describe("Contact page", () => {
  beforeEach(() => jest.clearAllMocks());
  it("renders the Contact heading", () => {
    renderContact();
    expect(react_1.screen.getByText("Contact")).toBeInTheDocument();
  });
  it("renders the Name, Email, Phone and Message fields", () => {
    renderContact();
    expect(react_1.screen.getByText("Name")).toBeInTheDocument();
    expect(react_1.screen.getByText("Email")).toBeInTheDocument();
    expect(react_1.screen.getByText("Phone")).toBeInTheDocument();
    expect(react_1.screen.getByLabelText("Message")).toBeInTheDocument();
  });
  it("renders the subject option buttons", () => {
    renderContact();
    expect(react_1.screen.getByText(/spam bot/i)).toBeInTheDocument();
    expect(react_1.screen.getByText(/opportunities\./i)).toBeInTheDocument();
    expect(react_1.screen.getByText(/dig the resume/i)).toBeInTheDocument();
  });
  it("renders a Send button", () => {
    renderContact();
    expect(react_1.screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });
  it("calls sendEmail and shows success message on submit", async () => {
    const toast = jest.fn();
    mockSendEmail.mockResolvedValueOnce(undefined);
    renderContact({ toast });
    react_1.fireEvent.submit(document.querySelector("form"));
    await (0, react_1.waitFor)(() => expect(mockSendEmail).toHaveBeenCalledTimes(1));
    expect(toast).toHaveBeenCalledWith("Message sent");
    expect(react_1.screen.getByText(/thanks for dropping a line/i)).toBeInTheDocument();
  });
  it("shows error toast when sendEmail fails", async () => {
    const toast = jest.fn();
    mockSendEmail.mockRejectedValueOnce(new Error("fail"));
    renderContact({ toast });
    react_1.fireEvent.submit(document.querySelector("form"));
    await (0, react_1.waitFor)(() => expect(toast).toHaveBeenCalledWith("Message send failed"));
    expect(react_1.screen.getByText("Name")).toBeInTheDocument();
  });
  it("disables the Send button while sending", async () => {
    mockSendEmail.mockImplementationOnce(() => new Promise(() => {}));
    renderContact();
    react_1.fireEvent.submit(document.querySelector("form"));
    await (0, react_1.waitFor)(() => expect(react_1.screen.getByRole("button", { name: /sending/i })).toBeDisabled());
  });
});
//# sourceMappingURL=Contact.test.js.map
