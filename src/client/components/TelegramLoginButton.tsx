import { useEffect, useId, useRef } from "react";
import { getBotInfo } from "../services/users";

export type TelegramAuthData = Record<string, string | number>;

// Embeds the Telegram Login Widget. The bot's domain must be registered with
// BotFather (/setdomain), so the widget does not render on localhost.
export default function TelegramLoginButton({
  onAuth,
  size = "large",
}: {
  onAuth: (data: TelegramAuthData) => void;
  size?: "large" | "medium" | "small";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onAuthRef = useRef(onAuth);
  onAuthRef.current = onAuth;
  const callbackName = `onTelegramAuth_${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let cancelled = false;

    (window as any)[callbackName] = (data: TelegramAuthData) => onAuthRef.current(data);

    getBotInfo()
      .then(({ telegramUsername }) => {
        if (cancelled || !telegramUsername) return;
        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.setAttribute("data-telegram-login", telegramUsername);
        script.setAttribute("data-size", size);
        script.setAttribute("data-onauth", `${callbackName}(user)`);
        script.setAttribute("data-request-access", "write");
        script.async = true;
        container.appendChild(script);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      delete (window as any)[callbackName];
      container.innerHTML = "";
    };
  }, [callbackName, size]);

  return <div ref={containerRef} data-testid="telegram-login" />;
}
