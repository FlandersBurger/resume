---
name: blurb-links
description: Checking, repairing and filling Ten Things answer blurbs that are links (images, YouTube, Spotify), including pulling images from Fandom or other MediaWiki wikis. Use when blurbs look broken, when lists need pictures, or when choosing which image to use.
---

# Blurb links

A blurb starting with `http` is shown by type (`getBlurbType` in `src/models/tenthings/list.ts`): `youtu…` → video, `spotify.com` → track, a path ending `.jpeg/.jpg/.gif/.png/.webp` (query allowed) or unsplash/pexels → image, anything else → a plain link. A URL that doesn't end like an image is not shown as one, even if it serves an image.

Bulk writes follow the [list-cleanup](../list-cleanup/SKILL.md) loop: plan, review page, explicit yes, backup, conditional update.

## Checking links

[`check-urls.mjs`](check-urls.mjs) checks every URL the way the game uses it: GET for images (must answer `image/*`), oEmbed for YouTube and Spotify (401/403 there = embedding disabled). It is resumable and throttled per host (`PER_HOST`, `TOTAL`, `DELAY`, `LIMIT` env vars). Input is `[{list, name, language, id, value, url}]` exported from enabled lists.

- Only `404`, `410`, a dead domain (`ENOTFOUND`) or a non-image body count as **gone**. A `403`, `429`, timeout or `5xx` means the site refused a bot: leave that blurb alone.
- Telegram fetches images server-side, so verify images with the User-Agent `TelegramBot (like TwitterBot)`. Sites behind Cloudflare often refuse Node's own client whatever the User-Agent. When a site turns automated requests away, use another source; routing around its bot protection is off limits.
- Wikimedia rate-limits hard: about one request every 2 s, and batch API queries of 50 titles.

## Repairs that recover the real image

- Google `imgres?imgurl=`, `url?url=` / `q=`, Bing `mediaurl=`: the target is in the query string. `images.app.goo.gl/…` 302s to an `imgres` URL (read `Location` without following).
- Wikipedia `Page#/media/File:X` or `/wiki/File:X`: ask that wiki's API for `prop=imageinfo&iiprop=url` (`iiurlwidth` gives a thumbnail for SVG/TIFF).
- Wikimedia `.svg`: use the PNG rendering, `/thumb/a/ab/X.svg/640px-X.svg.png`.
- Fandom (`*.wikia.nocookie.net`): drop `/revision/…` and add `?format=original` (`cleanImageUrl` in `src/connections/mediawiki.ts`). It keeps GIFs animated and gives a URL that ends like an image.
- Keep the result within `MAX_URL_BLURB_LENGTH` (1,000); when nothing loads, clear the blurb and keep the answer.

## Choosing an image

The user's ranking, best first:

1. **Animated GIF** of the answer itself (Minecraft's `Torch.gif`, Pokémon's `0618Stunfisk_SwSh.gif` model).
2. **PNG with transparency** (IHDR colour type 4 or 6, or a `tRNS` chunk; the first few hundred bytes tell you).
3. **Non-busy static image:** the official render or artwork, which on a wiki is the file named after the answer, over scene shots, posters and screenshots.
4. Any static image.

Skip shiny, back, icon, mini and fan-art variants. Among equals, take the larger.

## Fandom wikis

- Match per **list subject** (the part of the name before the spaced dash: "Harry Potter" in "Harry Potter - Spells"), not per category: categories are broad, subjects name a franchise. `https://<slug>.fandom.com/api.php` with `meta=siteinfo` tells you whether a wiki exists. Slug guesses go wrong ("The Wiki", unrelated wikis), so a person confirms each subject → wiki pairing.
- Look answers up as exact titles with `redirects=1&prop=pageimages|pageprops&piprop=original&ppprop=disambiguation`, 50 titles a query. Skip disambiguation pages. A redirect can land on a different thing (Galarian Stunfisk → Stunfisk): put redirected matches in their own review section.
- Lists of generic terms (card anatomy, game jargon) get random page images: skip them, or map answers to titles first ("Fire" → "Fire type", "Great" → "Great Ball").
- Some franchises have a second wiki for a spin-off (`pokemongo.fandom.com`).
