"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sitemapRoute = void 0;
const express_1 = require("express");
exports.sitemapRoute = (0, express_1.Router)();
const BASE_URL = "https://belgocanadian.com";
const pages = [
    { path: "/home", priority: "1.0", changefreq: "monthly" },
    { path: "/experience", priority: "0.9", changefreq: "monthly" },
    { path: "/skills", priority: "0.9", changefreq: "monthly" },
    { path: "/hobbies", priority: "0.7", changefreq: "monthly" },
    { path: "/contact", priority: "0.8", changefreq: "yearly" },
    { path: "/posts", priority: "0.6", changefreq: "weekly" },
];
exports.sitemapRoute.get("/sitemap.xml", (_req, res) => {
    const today = new Date().toISOString().split("T")[0];
    const urls = pages
        .map((p) => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`)
        .join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
    res.setHeader("Content-Type", "application/xml");
    res.send(xml);
});
//# sourceMappingURL=sitemap.js.map