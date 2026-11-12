import { useCallback, useEffect, useRef, useState } from "react";
import type { WebEventsMessage, WebGameView } from "@utils/tenthings-web";
import { WEB_EVENTS_TOPIC } from "@utils/tenthings-web";
import { answerTenthings, getTenthings, getTenthingsHint, skipTenthingsList } from "../../services/games";
import { useApp } from "../../context/AppContext";
import { useWebSocket } from "../../hooks/useWebSocket";

/**
 * A web Game as the page plays it: its current view, kept in step with the server's Events, and
 * the Actions a Player can take. Actions are queued on the server; their Events reload the view.
 * Pass `enabled: false` to do nothing (no signed-in User).
 */
export function useWebGame(webGameId: number, enabled = true) {
  const { toast } = useApp();
  const [view, setView] = useState<WebGameView | null>(null);
  const [sending, setSending] = useState(false);
  const toastRef = useRef(toast);
  toastRef.current = toast;
  const ticket = useRef(0);

  // Events can arrive in quick succession; only the latest reload may land.
  const reload = useCallback(async () => {
    const mine = ++ticket.current;
    try {
      const next = await getTenthings(webGameId);
      if (mine === ticket.current) setView(next);
    } catch {
      if (mine === ticket.current) toastRef.current("Couldn't load the game");
    }
  }, [webGameId]);

  useEffect(() => {
    if (!enabled) return;
    setView(null);
    reload();
  }, [enabled, reload]);

  const reloadRef = useRef(reload);
  reloadRef.current = reload;
  useWebSocket(
    {
      [WEB_EVENTS_TOPIC]: (data: unknown) => {
        const { webGameId: id, notices } = data as WebEventsMessage;
        if (id !== webGameId) return;
        notices.forEach((notice) => toastRef.current(notice));
        reloadRef.current();
      },
      // Messages that don't come from an Action (List selection warnings, sass).
      tenthings_message: (data: unknown) => {
        const { webGameId: id, message } = (data ?? {}) as { webGameId?: number; message?: string };
        if (id !== undefined && id !== webGameId) return;
        if (message) toastRef.current(message);
      },
    },
    enabled,
  );

  const act = useCallback(
    async (send: () => Promise<unknown>, failure: string) => {
      setSending(true);
      try {
        await send();
      } catch {
        toastRef.current(failure);
      } finally {
        setSending(false);
      }
    },
    [],
  );

  const guess = useCallback(
    (answer: string) => act(() => answerTenthings(webGameId, answer), "Couldn't send your guess"),
    [act, webGameId],
  );
  const hint = useCallback(() => act(() => getTenthingsHint(webGameId), "Couldn't ask for a hint"), [act, webGameId]);
  const skip = useCallback(() => act(() => skipTenthingsList(webGameId), "Couldn't skip the list"), [act, webGameId]);

  return { view, sending, guess, hint, skip };
}
