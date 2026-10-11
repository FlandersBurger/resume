import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
// Font Awesome, reduced to the icons in use (generated at build time, see the plugin in vite.config.ts)
import "./generated/fontawesome.css";

// After a deploy, an open tab still points at the old hashed chunks, which are gone.
// Reload to pick up the new index.html, at most once per 10s to avoid a reload loop.
window.addEventListener("vite:preloadError", () => {
  try {
    const last = Number(sessionStorage.getItem("chunkReloadAt"));
    if (Date.now() - last < 10_000) return;
    sessionStorage.setItem("chunkReloadAt", String(Date.now()));
  } catch {
    return;
  }
  window.location.reload();
});

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");

createRoot(container).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
