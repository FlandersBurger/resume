"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWebSocket = void 0;
const react_1 = require("react");
function useWebSocket(handlers) {
    const connectionRef = (0, react_1.useRef)(null);
    const handlersRef = (0, react_1.useRef)(handlers);
    handlersRef.current = handlers;
    const connect = (0, react_1.useCallback)((activeRef) => {
        const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        const ws = new WebSocket(`${protocol}//${window.location.host}/ws`);
        ws.onopen = () => console.log("WebSocket connected");
        ws.onclose = () => {
            if (!activeRef.current)
                return;
            console.log("WebSocket closed. Reconnecting...");
            setTimeout(() => connect(activeRef), 1000);
        };
        ws.onerror = (e) => console.error("WebSocket error", e);
        ws.onmessage = (e) => {
            try {
                const payload = JSON.parse(e.data);
                const handler = handlersRef.current[payload.topic];
                if (handler)
                    handler(payload.data);
            }
            catch {
            }
        };
        connectionRef.current = ws;
    }, []);
    (0, react_1.useEffect)(() => {
        const activeRef = { current: true };
        connect(activeRef);
        return () => {
            activeRef.current = false;
            connectionRef.current?.close();
        };
    }, [connect]);
    const send = (0, react_1.useCallback)((topic, data) => {
        connectionRef.current?.send(JSON.stringify({ topic, data }));
    }, []);
    return { send };
}
exports.useWebSocket = useWebSocket;
//# sourceMappingURL=useWebSocket.js.map