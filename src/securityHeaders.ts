import { NextFunction, Request, Response } from "express";

// Report-only for now: violations show up in the browser console without blocking anything.
// Once it has been quiet for a while, rename the header to Content-Security-Policy to enforce it.
const contentSecurityPolicy = [
  "default-src 'self'",
  // Telegram login widget, Firebase popup sign-in
  "script-src 'self' https://telegram.org https://apis.google.com",
  // styled-components injects inline <style> tags
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  // Profile photos and list images come from arbitrary hosts
  "img-src 'self' data: blob: https:",
  "media-src 'self'",
  "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com",
  "frame-src https://www.youtube.com https://player.vimeo.com https://open.spotify.com https://oauth.telegram.org https://resume-172205.firebaseapp.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

export default (_req: Request, res: Response, next: NextFunction) => {
  // One day to start with; raise to a year (31536000) once this has run without trouble
  res.setHeader("Strict-Transport-Security", "max-age=86400");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  // Not "same-origin": the Firebase sign-in popup needs to talk back to this window
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Content-Security-Policy-Report-Only", contentSecurityPolicy);
  next();
};
