import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useApp } from "../../../client/context/AppContext";
import { sendEmail } from "../../../client/services/email";
import Contact from "../../../client/pages/Contact";
import { defaultContextValue, AppContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/services/email", () => ({ sendEmail: jest.fn() }));
// react-helmet-async requires a provider; stub it out
jest.mock("react-helmet-async", () => ({ Helmet: () => null }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;
const mockSendEmail = sendEmail as jest.MockedFunction<typeof sendEmail>;

function renderContact(overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(<Contact />);
}

describe("Contact page", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders the contact form", () => {
    renderContact();
    expect(document.querySelector("form")).toBeInTheDocument();
  });

  it("renders the Name, Email, Phone and Message fields", () => {
    renderContact();
    // Labels are not linked via htmlFor (except Message) — check by label text
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("renders the subject option buttons", () => {
    renderContact();
    expect(screen.getByText(/spam bot/i)).toBeInTheDocument();
    expect(screen.getByText(/opportunities\./i)).toBeInTheDocument();
    expect(screen.getByText(/dig the resume/i)).toBeInTheDocument();
  });

  it("renders a Send button", () => {
    renderContact();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("calls sendEmail and shows success message on submit", async () => {
    const toast = jest.fn();
    mockSendEmail.mockResolvedValueOnce(undefined);
    renderContact({ toast });
    fireEvent.submit(document.querySelector("form")!);
    await waitFor(() => expect(mockSendEmail).toHaveBeenCalledTimes(1));
    expect(toast).toHaveBeenCalledWith("Message sent");
    expect(screen.getByText(/thanks for dropping a line/i)).toBeInTheDocument();
  });

  it("shows error toast when sendEmail fails", async () => {
    const toast = jest.fn();
    mockSendEmail.mockRejectedValueOnce(new Error("fail"));
    renderContact({ toast });
    fireEvent.submit(document.querySelector("form")!);
    await waitFor(() => expect(toast).toHaveBeenCalledWith("Message send failed"));
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("disables the Send button while sending", async () => {
    mockSendEmail.mockImplementationOnce(() => new Promise(() => {})); // never resolves
    renderContact();
    fireEvent.submit(document.querySelector("form")!);
    await waitFor(() => expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled());
  });
});
