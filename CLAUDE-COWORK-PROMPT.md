# Claude Code Cowork — LocalHouse SEO & Redirect Fixes

## Project Context
- **Repo:** `/home/user/localhouse` — React SPA (Vite + Wouter routing) deployed on Vercel
- **Branch:** `claude/localhouse-website-changes-OJf6v`
- **Key files:**
  - `client/src/App.tsx` — all routes & redirects (wouter)
  - `client/src/components/Layout.tsx` — header + footer (footer starts ~line 180)
  - `client/src/pages/Restaurant.tsx` — restaurant page
  - `client/index.html` — HTML entry, preload tags
  - `client/public/sitemap.xml` — static sitemap
  - `vercel.json` — Vercel redirects & rewrites

---

## Tasks to Implement (in order)

### 1. Add catch-all `/event/*` server-side redirect in `vercel.json`

External links point to old Squarespace event URLs like `/event/august-3rd-music-brunch//` (double slash). Client-side redirects in App.tsx already handle some of these, but we need a **server-side 301 catch-all** so crawlers get a proper HTTP redirect.

**In `vercel.json`**, add these to the `redirects` array (BEFORE the existing non-www → www redirect):

```json
{
  "source": "/event/august-3rd-music-brunch/:path*",
  "destination": "/brunch",
  "permanent": true
},
{
  "source": "/event/private-balconies/:path*",
  "destination": "/private-events",
  "permanent": true
},
{
  "source": "/event/:path*",
  "destination": "/private-events",
  "permanent": true
}
```

This handles double-slash, trailing-slash, and any other `/event/*` legacy URL with a proper 301.

---

### 2. Add all legacy Squarespace redirects to `vercel.json` as server-side 301s

The client-side redirects in `App.tsx` (lines ~48-101) work for users but **Google's crawler may not execute JavaScript**. Copy ALL legacy redirect paths from `App.tsx` into `vercel.json` as permanent 301 redirects so search engines see proper HTTP redirects.

Key legacy paths to add:
- `/menu`, `/menu/brunch`, `/menu/dinner`, `/menu/drinks`, `/menu/dessert` → `/restaurant`
- `/explore`, `/sleep` → `/hotel`
- `/about` → `/`
- `/offers`, `/store/cart` → `/`
- `/event/private-balconies` → `/private-events`

**Keep** the existing client-side redirects in App.tsx too (they're a fallback for SPA navigation).

---

### 3. Preload the brunch hero image instead of restaurant-interior

The homepage is now brunch-focused, so the LCP image should match.

**In `client/index.html`**, find the preload lines (~line 245-247):
```html
<link rel="preload" as="image" href="/images/restaurant-interior.webp" type="image/webp" />
<link rel="preload" as="image" href="/images/restaurant-interior.jpg" type="image/jpeg" />
```

First, check what hero image the Home page (`client/src/pages/Home.tsx`) actually uses for its first visible section. Replace the preload with that image path. If the home hero uses `/images/brunch-hero.webp` or similar, preload that instead. If the image doesn't have a `.webp` version, only preload the `.jpg`.

---

### 4. Add a "Leave a Review" link to the footer

**In `client/src/components/Layout.tsx`**, in the footer's Quick Links column (look for the navigation links list around line 230-260), add a "Leave a Review" link that points to `/leave-review`.

The `/leave-review` route already exists in `App.tsx` and the `LeaveReview.tsx` page is built. Just add the footer link so it's discoverable. Style it the same as the other footer links. Place it as the **last item** in the Quick Links list.

---

### 5. Add `leave-review` to `sitemap.xml`

**In `client/public/sitemap.xml`**, add a new `<url>` entry for the leave-review page:

```xml
<url>
  <loc>https://www.localhouse.com/leave-review</loc>
  <lastmod>2026-03-03</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>
```

---

### 6. Verify and update `robots.txt` sitemap declaration

**In `client/public/robots.txt`**, confirm that the Sitemap line reads:
```
Sitemap: https://www.localhouse.com/sitemap.xml
```
(with `https://www.` — not `http://` and not bare domain). If it already says this, no change needed.

---

## Post-Deploy Manual Steps (DO NOT implement in code — just add as an HTML comment in index.html for the team)

Add this comment block at the top of `client/index.html` (after the `<!DOCTYPE html>` line):

```html
<!--
  POST-DEPLOY SEO CHECKLIST (March 2026):
  1. GSC: Delete old sitemap http://www.localhouse.com/sitemap.xml
  2. GSC: Submit new sitemap https://www.localhouse.com/sitemap.xml
  3. GSC: Request re-indexing for: /, /brunch, /restaurant, /hotel
  4. Vercel: Verify both localhouse.com AND www.localhouse.com are configured in domain settings
  5. Monitor: Watch "crawled but not indexed" count (currently 151) — should decrease over 4-6 weeks
-->
```

---

## Validation

After making all changes:
1. Run `npx vite build` to make sure the project builds without errors
2. Check that `vercel.json` is valid JSON (no trailing commas)
3. Verify the sitemap.xml is well-formed XML
4. Commit all changes with message: "fix: add server-side 301 redirects, update preload image, add review link to footer"
5. Push to branch `claude/localhouse-website-changes-OJf6v`
