import { useCallback, useEffect, useState } from "react";
import { getBotInfo } from "../services/users";

export type TelegramAuthData = Record<string, string | number>;

type TelegramLoginApi = {
  auth: (
    options: { bot_id: number; request_access?: string },
    callback: (data: TelegramAuthData | false) => void,
  ) => void;
};

const WIDGET_SRC = "https://telegram.org/js/telegram-widget.js?22";
let scriptPromise: Promise<TelegramLoginApi> | null = null;

function loadTelegramLogin(): Promise<TelegramLoginApi> {
  const existing = (window as any).Telegram?.Login;
  if (existing) return Promise.resolve(existing);
  scriptPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.onload = () => {
      const api = (window as any).Telegram?.Login;
      if (api) resolve(api);
      else reject(new Error("Telegram login unavailable"));
    };
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Failed to load Telegram login"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

// Opens Telegram's login popup from our own button instead of the widget iframe.
// The script and bot id are loaded up front: the popup must open synchronously
// inside the click handler or browsers block it. The bot's domain must be
// registered with BotFather (/setdomain), so the popup errors on localhost.
export function useTelegramLogin() {
  const [api, setApi] = useState<TelegramLoginApi | null>(null);
  const [botId, setBotId] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([loadTelegramLogin(), getBotInfo()])
      .then(([loaded, { telegramBotId }]) => {
        if (cancelled || !telegramBotId) return;
        setApi(loaded);
        setBotId(telegramBotId);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(
    (onAuth: (data: TelegramAuthData) => void) => {
      if (!api || !botId) return;
      api.auth({ bot_id: botId, request_access: "write" }, (data) => {
        if (data) onAuth(data);
      });
    },
    [api, botId],
  );

  return { ready: !!api && !!botId, login };
}
