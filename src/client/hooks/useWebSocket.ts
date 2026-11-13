import { useEffect, useRef } from "react";

type MessageHandler = (data: unknown) => void;
type Handlers = Record<string, MessageHandler>;

const RECONNECT_DELAY = 1000;
/** How long the connection outlives its last subscriber, so a page change doesn't reconnect. */
const IDLE_CLOSE_DELAY = 1000;

// One connection for the whole page, shared by every subscriber. The server broadcasts every
// topic to every connection, so a second connection would only receive the same messages twice.
const subscribers = new Set<{ current: Handlers }>();
let socket: WebSocket | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | undefined;
let idleTimer: ReturnType<typeof setTimeout> | undefined;

function connect() {
  reconnectTimer = undefined;
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const ws = new WebSocket(`${protocol}//${window.location.host}/ws`);
  socket = ws;

  ws.onmessage = (e) => {
    let payload: { topic?: string; data?: unknown };
    try {
      payload = JSON.parse(e.data);
    } catch {
      return; // ignore malformed messages
    }
    for (const handlers of [...subscribers]) {
      const handler = payload.topic ? handlers.current[payload.topic] : undefined;
      try {
        handler?.(payload.data);
      } catch (error) {
        console.error(`WebSocket handler for ${payload.topic} failed`, error);
      }
    }
  };

  ws.onclose = () => {
    if (socket !== ws) return; // closed on purpose
    socket = null;
    if (subscribers.size) reconnectTimer = setTimeout(connect, RECONNECT_DELAY);
  };

  ws.onerror = (e) => console.error("WebSocket error", e);
}

function disconnect() {
  idleTimer = undefined;
  clearTimeout(reconnectTimer);
  reconnectTimer = undefined;
  const ws = socket;
  socket = null;
  ws?.close();
}

function subscribe(handlers: { current: Handlers }) {
  subscribers.add(handlers);
  clearTimeout(idleTimer);
  idleTimer = undefined;
  if (!socket && !reconnectTimer) connect();
  return () => {
    subscribers.delete(handlers);
    if (!subscribers.size) idleTimer = setTimeout(disconnect, IDLE_CLOSE_DELAY);
  };
}

/** For tests: drop the connection and every subscriber at once. */
export function resetWebSocket() {
  subscribers.clear();
  clearTimeout(idleTimer);
  disconnect();
}

/**
 * Calls `handlers[topic]` with each message the server broadcasts on that topic. Every caller
 * shares one connection, opened with the first subscriber, reconnected if it drops, and closed
 * shortly after the last one leaves. Handlers may change between renders; the latest are used.
 * Pass `enabled: false` to not subscribe (e.g. no signed-in User).
 */
export function useWebSocket(handlers: Handlers, enabled = true) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    if (!enabled) return;
    return subscribe(handlersRef);
  }, [enabled]);
}
