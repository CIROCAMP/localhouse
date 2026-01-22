
- [x] Update dinner hours from 6PM-11PM to 4PM-10PM across all pages
- [x] Remove grey area from hero slider image (wood panel column)
- [x] Import 69 subscribed contacts into LocalHouse database for newsletter
- [x] Save 66 private dining inquiries separately for follow-up
- [x] Create backup of all 1,051 Bento Box contacts
- [x] Import 4,039 TOAST POS subscribed guests
- [x] Create merged contact list (4,107 total subscribers)
- [x] Create newsletter_subscribers table and import 4,107 contacts into database
- [x] Import Squarespace subscribers (985 new)
- [x] Import OpenTable subscribers (4,676 new)
- [x] Total database: 9,768 subscribers from all sources
- [x] Install Google Ads conversion tracking on OpenTable button clicks
- [x] Add UTM parameter tracking for Google Analytics
- [x] Test conversion tracking is working
- [x] Install Google Ads tag AW-967579743 on the site
- [x] Update restaurant page with correct menu descriptions from PDFs
- [x] Add online ordering link to restaurant page
- [x] Add PDF menu downloads (Dinner, Brunch, Happy Hour)
- [x] Fix mobile view alignment and cut-off issues
- [x] Update dinner hours to Wed-Sun
- [x] Add Happy Hour section Wed-Sun 4-6PM
- [x] Fix brunch menu: remove Smash Burger, Salmon Bowl, Tuna Melt, BLT, Local Breakfast descriptions
- [x] Fix dinner menu: remove Rigatoni Pasta, House Salad descriptions
- [x] Update "full menu available at the restaurant" to "full menu available below"
- [x] Change "Order Online" button to redirect to Toast instead of OpenTable
- [x] Update footer hours: Dinner closed Mon & Tues
- [x] Update FAQ: Private events email to info@localhouse.com
- [x] Update FAQ: Remove bar hours mention (midnight on weekends)
- [x] Update FAQ: Remove parking garage partnership mention

## SEO Fixes - Phase 1

- [x] Create robots.txt file with proper disallow rules
- [x] Remove noindex meta tags from pages (not actively used)
- [x] Fix 4xx errors and broken links (301 redirects in place)
- [x] Verify robots.txt is accessible at /robots.txt
- [x] Verify sitemap.xml exists and is accessible
- [x] Test robots.txt with Google Search Console

## Mobile Page Speed Optimization - CRITICAL

- [x] Audit all images in public folder and identify optimization candidates
- [x] Optimize and convert hero images to WebP format (target: <100KB each)
- [x] Implement responsive images with picture tags for mobile/desktop
- [x] Add lazy loading to below-the-fold images
- [x] Defer non-critical JavaScript (analytics, tracking)
- [x] Minify CSS and JavaScript files (automatic via Vite)
- [x] Enable gzip compression (automatic via server)
- [ ] Test on PageSpeed Insights and validate LCP < 2.5s
- [ ] Verify mobile performance score > 70/100

## /Hotel/ Page SEO Recovery - CRITICAL (20.7K impressions lost)

- [x] Update SEO title tag: "Luxury Boutique Hotel Rooms in Miami Beach | Ocean View Suites | The Local House"
- [x] Update meta description: "Luxury hotel rooms in Miami Beach with ocean views. Modern boutique suites, free WiFi, rooftop bar. Book directly for best rates."
- [x] Update H1 heading to clearly describe rooms/hotel offering
- [x] Add Hotel schema markup with starRating, address, and URL
- [x] Verify canonical tag is correct: https://www.localhouse.com/hotel/
- [x] Optimize Open Graph tags (og:title, og:description, og:image)
- [ ] Test /hotel/ page on PageSpeed Insights to verify LCP < 2.5s
- [ ] Submit to Google Search Console for re-crawl

## Google Ads Conversion Tracking - OpenTable Bookings

- [x] Add Google Ads conversion tracking code to index.html head
- [x] Update OpenTable links on /brunch/ page with onclick handler
- [x] Update OpenTable links on /hotel/ page with onclick handler
- [x] Update OpenTable links on /restaurant/ page with onclick handler
- [x] Update OpenTable links on homepage with onclick handler
- [x] Update OpenTable links in footer and other locations
- [x] Test conversion tracking in incognito mode
- [x] Verify conversions appear in Google Ads dashboard after 24 hours

## Brunch Page Hero Image Update

- [x] Optimize and convert new brunch overhead photo to WebP (181KB)
- [x] Update Brunch.tsx to use new hero image (brunch-hero-overhead.webp/jpg)
- [x] Reduce overlay opacity for better image visibility
- [ ] Publish to production and verify image displays correctly
