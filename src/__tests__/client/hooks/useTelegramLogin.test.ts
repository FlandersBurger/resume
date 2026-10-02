import { renderHook, waitFor } from "@testing-library/react";
import { getBotInfo } from "../../../client/services/users";
import { useTelegramLogin } from "../../../client/hooks/useTelegramLogin";

jest.mock("../../../client/services/users", () => ({ getBotInfo: jest.fn() }));

const mockGetBotInfo = getBotInfo as jest.MockedFunction<typeof getBotInfo>;

function telegramScript() {
  return document.head.querySelector<HTMLScriptElement>('script[src^="https://telegram.org/js/telegram-widget.js"]');
}

function finishScriptLoad(auth: jest.Mock) {
  (window as any).Telegram = { Login: { auth } };
  telegramScript()!.onload!(new Event("load"));
}

// After the first load the hook reuses window.Telegram instead of adding a script
function preloadTelegram(auth: jest.Mock) {
  (window as any).Telegram = { Login: { auth } };
}

describe("useTelegramLogin", () => {
  beforeEach(() => jest.clearAllMocks());

  it("loads the Telegram script and opens the auth popup with the bot id", async () => {
    mockGetBotInfo.mockResolvedValue({ telegramUsername: "TenThingsBot", telegramBotId: 123 });
    const auth = jest.fn((_opts, cb) => cb({ id: 42, hash: "h" }));
    const { result } = renderHook(() => useTelegramLogin());

    expect(result.current.ready).toBe(false);
    finishScriptLoad(auth);
    await waitFor(() => expect(result.current.ready).toBe(true));

    const onAuth = jest.fn();
    result.current.login(onAuth);
    expect(auth).toHaveBeenCalledWith({ bot_id: 123, request_access: "write" }, expect.any(Function));
    expect(onAuth).toHaveBeenCalledWith({ id: 42, hash: "h" });
  });

  it("does not call onAuth when the user cancels the popup", async () => {
    mockGetBotInfo.mockResolvedValue({ telegramUsername: "TenThingsBot", telegramBotId: 123 });
    const auth = jest.fn((_opts, cb) => cb(false));
    preloadTelegram(auth);
    const { result } = renderHook(() => useTelegramLogin());
    await waitFor(() => expect(result.current.ready).toBe(true));

    const onAuth = jest.fn();
    result.current.login(onAuth);
    expect(onAuth).not.toHaveBeenCalled();
  });

  it("stays unavailable when the server has no bot id", async () => {
    mockGetBotInfo.mockResolvedValue({ telegramUsername: "" });
    const auth = jest.fn();
    preloadTelegram(auth);
    const { result } = renderHook(() => useTelegramLogin());
    await waitFor(() => expect(mockGetBotInfo).toHaveBeenCalled());

    result.current.login(jest.fn());
    expect(result.current.ready).toBe(false);
    expect(auth).not.toHaveBeenCalled();
  });
});
