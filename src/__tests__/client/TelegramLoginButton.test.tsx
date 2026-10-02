import { render, screen, waitFor } from "@testing-library/react";
import TelegramLoginButton from "../../client/components/TelegramLoginButton";
import { getBotInfo } from "../../client/services/users";

jest.mock("../../client/services/users", () => ({ getBotInfo: jest.fn() }));

const mockGetBotInfo = getBotInfo as jest.MockedFunction<typeof getBotInfo>;

function widgetScript() {
  return screen.getByTestId("telegram-login").querySelector("script");
}

describe("TelegramLoginButton", () => {
  beforeEach(() => jest.clearAllMocks());

  it("embeds the widget for the bot and routes its callback to onAuth", async () => {
    mockGetBotInfo.mockResolvedValue({ telegramUsername: "TenThingsBot" });
    const onAuth = jest.fn();
    render(<TelegramLoginButton onAuth={onAuth} />);

    await waitFor(() => expect(widgetScript()).not.toBeNull());
    const script = widgetScript()!;
    expect(script.src).toBe("https://telegram.org/js/telegram-widget.js?22");
    expect(script.getAttribute("data-telegram-login")).toBe("TenThingsBot");
    expect(script.getAttribute("data-size")).toBe("large");

    const callback = script.getAttribute("data-onauth")!.replace("(user)", "");
    (window as any)[callback]({ id: 42, hash: "h" });
    expect(onAuth).toHaveBeenCalledWith({ id: 42, hash: "h" });
  });

  it("renders nothing when the bot username is unavailable", async () => {
    mockGetBotInfo.mockResolvedValue({ telegramUsername: "" });
    render(<TelegramLoginButton onAuth={jest.fn()} />);
    await waitFor(() => expect(mockGetBotInfo).toHaveBeenCalled());
    expect(widgetScript()).toBeNull();
  });

  it("removes its global callback on unmount", async () => {
    mockGetBotInfo.mockResolvedValue({ telegramUsername: "TenThingsBot" });
    const { unmount } = render(<TelegramLoginButton onAuth={jest.fn()} />);
    await waitFor(() => expect(widgetScript()).not.toBeNull());
    const callback = widgetScript()!.getAttribute("data-onauth")!.replace("(user)", "");

    unmount();
    expect((window as any)[callback]).toBeUndefined();
  });
});
