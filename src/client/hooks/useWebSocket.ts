import { useEffect, useRef, useCallback } from "react";

type MessageHandler = (data: unknown) => void;

export function useWebSocket(handlers: Record<string, MessageHandler>) {
  const connectionRef = useRef<WebSocket | null>(null);
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  const connect = useCallback((activeRef: { current: boolean }) => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const ws = new WebSocket(`${protocol}//${window.location.host}/ws`);

    ws.onopen = () => console.log("WebSocket connected");

    ws.onclose = () => {
      if (!activeRef.current) return;
      console.log("WebSocket closed. Reconnecting...");
      setTimeout(() => connect(activeRef), 1000);
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
    const activeRef = { current: true };
    connect(activeRef);
    return () => {
      activeRef.current = false;
      connectionRef.current?.close();
    };
  }, [connect]);

  const send = useCallback((topic: string, data: unknown) => {
    connectionRef.current?.send(JSON.stringify({ topic, data }));
  }, []);

  return { send };
}
