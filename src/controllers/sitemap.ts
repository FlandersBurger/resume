import { Router, Request, Response } from "express";
export const sitemapRoute = Router();

const BASE_URL = "https://belgocanadian.com";

// Public, indexable pages with their SEO priority
const pages = [
  { path: "/home", priority: "1.0", changefreq: "monthly" },
  { path: "/experience", priority: "0.9", changefreq: "monthly" },
  { path: "/skills", priority: "0.9", changefreq: "monthly" },
  { path: "/hobbies", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/posts", priority: "0.6", changefreq: "weekly" },
];

sitemapRoute.get("/sitemap.xml", (_req: Request, res: Response) => {
  const today = new Date().toISOString().split("T")[0];
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.send(xml);
});
