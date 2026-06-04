import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// Mirrors the Express static middleware directories so the Vite dev server
// serves /bootstrap6.min.css, /fontawesome.min.css, /hobbies/... etc.
const serveStaticDirs = (): import("vite").Plugin => {
  const dirs = ["resources", "assets", "images", "sounds", "data"];
  const mime: Record<string, string> = {
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    webp: "image/webp",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    ogg: "audio/ogg",
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    eot: "application/vnd.ms-fontobject",
  };
  return {
    name: "serve-static-dirs",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url ?? "/").split("?")[0]);
        for (const dir of dirs) {
          const filePath = path.join(__dirname, dir, url);
          try {
            if (fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).slice(1).toLowerCase();
              res.setHeader("Content-Type", mime[ext] ?? "application/octet-stream");
              fs.createReadStream(filePath).pipe(res as any);
              return;
            }
          } catch {
            // not in this dir, try next
          }
        }
        next();
      });
    },
  };
};

export default defineConfig({
  root: "src/client",
  plugins: [react(), serveStaticDirs()],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/client"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000",
      "/bots": "http://localhost:3000",
      "/ws": {
        target: "ws://localhost:3000",
        ws: true,
      },
    },
  },
});
