import { useApp } from "../context/AppContext";

export function ToastContainer() {
  const { toasts } = useApp();

  return (
    <div id="toast" style={{ position: "fixed", top: 58, right: 16, zIndex: 9999, pointerEvents: "none" }}>
      {toasts.map((t) => (
        <div
          key={t.id}
          style={{
            background: "#333",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 4,
            marginBottom: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            pointerEvents: "auto",
          }}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
