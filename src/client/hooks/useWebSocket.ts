import { useEffect, useRef, useCallback } from "react";

type MessageHandler = (data: unknown) => void;

export function useWebSocket(handlers: Record<string, MessageHandler>) {
  const connectionRef = useRef<WebSocket | null>(null);
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  const connect = useCallback(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const ws = new WebSocket(`${protocol}//${window.location.host}`);

    ws.onopen = () => console.log("WebSocket connected");

    ws.onclose = () => {
      console.log("WebSocket closed. Reconnecting...");
      setTimeout(connect, 1000);
    };

    ws.onerror = (e) => console.error("WebSocket error", e);

    ws.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data);
        const handler = handlersRef.current[payload.topic];
        if (handler) handler(payload.data);
      } catch {
        // ignore malformed messages
      }
    };

    connectionRef.current = ws;
  }, []);

  useEffect(() => {
    connect();
    return () => {
      connectionRef.current?.close();
    };
  }, [connect]);

  const send = useCallback((topic: string, data: unknown) => {
    connectionRef.current?.send(JSON.stringify({ topic, data }));
  }, []);

  return { send };
}
