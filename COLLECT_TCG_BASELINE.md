# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-11-01

## Repositories
- Production: `collecttcg/Collect_TCG`
- Development: `collecttcg/Collect_TCG_Dev`
- Default branch: `main`
- Development is the normal working environment; Production is protected.
- Reconciliation priority: current GitHub HEAD > latest valid release manifest > baseline > recent Project context > older context.

## Versioning
- `V210` is the final legacy `V###` release.
- Current releases use `YYYY-MM-DD-vNN`; Development and Production counters are independent.
- Historical release manifests are immutable.

## Current Development
Latest validated Development release: `2026-11-01-v01`
Previous Development: `2026-10-31-v02`
Development release manifest: `release-manifests/2026-11-01-v01.txt`
Development v01 package source commit: `64f67120c371b13b77fa38fa8c72fd773fe941c2`
Development v01 manifest commit: `43741587717b1d56ef5f9ef09347a78079e64235`

### Development package record — 2026-11-01-v01
- Full ZIP: `Collect-TCG-Dev-2026-11-01-v01-full.zip`
- Full SHA256: `e8efb6d063e5aed4f0bb2fa03465b1a6ef5358b8e3c5e920b1900b4da1286d98`
- Patch ZIP: `Collect-TCG-Dev-2026-10-31-v02-to-2026-11-01-v01-patch.zip`
- Patch SHA256: `2672666a0aaa85c1c6e688b9f9fcb163305b96e08f72a08a4abdd040d3fe49e4`

Current Development behavior:
- Inventory Sort remains separate from Filters with retained desktop/mobile responsive toolbar behavior and Most Popular sorting.
- Owner cards support an `On eBay` status, optional validated eBay listing URL, Owner-only filter, image badge and quick-menu Mark/Remove On eBay actions.
- Owner quick actions preserve the current viewport when rerendering after availability, eBay-status and lifecycle changes.
- Owner Add/Edit retains JPEG, PNG, WebP, HEIC and HEIF support with native decode first and pinned `heic-to` fallback.
- Owner Add/Edit listing photos retain file drop and drag-reorder edge auto-scroll.
- Owner Inventory Tools → PSA POP retains `Get Never-Synced PSA POPs (N)`; existing Update Due / Update All behavior remains unchanged.
- Owner-only AI Card Scanner, QR Generator, eBay account links/Ban List, Buyer Messages, generators, private analytics and established compact Owner Inventory Tools remain retained.
- No SQL/schema/RLS/Edge Function change was required.

## Current Production
Latest Production: `2026-11-01-v01`
Previous Production: `2026-10-31-v02`
Development promoted from: `2026-11-01-v01` final validated state `d3416a0d5de88aecf0595d6a334def9add4a3367`
Production release manifest: `release-manifests/2026-11-01-v01.txt`
Production v01 package source commit: `6509df22aefbeaebbe0dd9019614251a4eaa28e3`
Production last-known-good / release manifest commit: `df8e6108ac560da7ef95b290ea7f7ea7df957f6b`

### Production package record — 2026-11-01-v01
- Full ZIP: `Collect-TCG-Production-2026-11-01-v01-full.zip`
- Full SHA256: `662aec4a41d31dcc44292c2679fb8edf85cb80d4b64e73841127621efaa7dfac`
- Patch ZIP: `Collect-TCG-Production-2026-10-31-v02-to-2026-11-01-v01-patch.zip`
- Patch SHA256: `152784b521171f2496c9caadb6e5a3c1facc24b5d10e3002d7fc4ec878c553e0`

### Production 2026-11-01-v01
Purpose: promote the validated Development eBay listing-status and quick-action viewport-preservation changes while preserving Production-specific behavior.

Retained/current behavior:
- Inventory Sort remains outside Filters and retains Custom Order/name/date/year/grade/price methods plus `Most Popular`.
- Owner card quick menu supports Mark/Remove On eBay and existing availability/lifecycle actions.
- Owner Edit supports Listed on eBay plus an optional validated eBay listing URL; the marker remains stored backward-compatibly in notes and is stripped from normal visible notes.
- On eBay badges render on card images with positioning that accounts for the NEW badge.
- Owner quick actions preserve the current viewport instead of jumping upward after rerender.
- Production-specific scanner remains `scan-card-ai`; Development-only analytics-test behavior is excluded.
- Owner Add/Edit file drop, drag-reorder edge auto-scroll and HEIC/HEIF support remain retained.
- PSA POP never-synced, Due and All actions remain retained.
- QR Generator, eBay accounts/Ban List, Buyer Messages, SEO/stable URLs, analytics/privacy boundaries, Contact to Buy, giveaways and generators remain retained.
- SQL required: No.

Validation completed: Development release workflow and package gate; Production rollback anchor; all Production JavaScript syntax; Production repository/reference checks; promoted eBay/quick-action integration contracts; retained Inventory/HEIC/Owner contracts; CSS/Post Generator checks; SEO generator self-test and Production SEO regeneration/validation; full/patch ZIP creation and integrity checks; package artifact upload; immutable Production manifest/checksums; Pages deployment confirmation; last-known-good advanced to the v01 manifest commit.

Validation limitations:
- Live Production was not manually opened to avoid contaminating Insights.
- Interactive desktop/mobile/Safari browser testing was not performed during Production promotion; repository and workflow validation passed.

## Historical immutable state retained
- Production `2026-10-31-v02` / Development `2026-10-31-v02` remain immutable prior releases containing Inventory sorting and responsive toolbar improvements.
- Production `2026-10-31-v01` / Development `2026-10-31-v01` remain immutable prior releases containing Owner image workflow and PSA POP improvements.
- Production `2026-10-30-v04` / Development `2026-10-30-v06` remain immutable prior releases and retain the modern HEIC decoder path.
- Development `2026-10-30-v04` / Production `2026-10-30-v03` introduced/promoted initial HEIC support.
- Development `2026-10-30-v03` / Production `2026-10-30-v02` introduced/promoted corrected Unassigned Owners assignment.
- Production `2026-10-27-v02` remains immutable and retains its historical manifest facts.
- Production `2026-10-25-v03` added the Owner eBay Ban List and `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`, applied and verified on Supabase project `cbzytysxtdcqxuckspye`.

## Canonical retained behavior
Preserve public card pages/SEO/stable URLs/SPA history; Related Cards/Trending/discovery attribution; Inventory/Collection/Sold/Reserved/Favorites; Inventory sorting and custom ordering; Owner Mode and Owner-only tools; JPEG/PNG/WebP/HEIC/HEIF listing photos; established compact Owner Inventory Tools; Owner categories/Unassigned Owners; inventory value; Buyer Messages; private analytics/Buyer Preview; Owner-only AI Card Scanner; eBay Ban List and listing status; QR Generator; Post Generators/giveaways; Contact to Buy; Malaysia/Singapore messaging; Supabase/RLS and analytics boundaries; Safari-safe layout; Development analytics-test exclusion in Development only.

## Intentionally removed / excluded
Do not restore Download Share Preview; V200 inquiry basket; V201 custom Share menu/grid; V202 share-menu experiment; V203/V204 compact-layout experiments; abandoned/superseded scanner/layout experiments; old Beta runtime dependencies; Development-only analytics-test behavior in Production; post-v09 duplicate Inventory Manager/dashboard renderer.

## SQL / database baseline
- Latest relevant Production migration remains `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`.
- `public.ebay_banlist` remains Owner-only through RLS.
- Card Owner assignment uses existing private `card_owner_private` metadata and authorization.
- `2026-11-01-v01` changes are client-side and required no SQL/database/RLS/Edge Function change.

## Release contract
A release is complete only after applicable implementation, validation, regression review, committed-file inspection, package integrity checks, immutable manifest, Pages deployment and rollback protection are confirmed. **Tested** means executed; **Statically verified** means repository/code inspection only; **Not tested** means unavailable/not performed. Do not live-open Production for routine testing without explicit authorization.

## Baseline maintenance
Reconcile this file in both Development and Production repositories after every accepted release or meaningful state change. Preserve historical release facts and retained/removed behavior; never rewrite immutable manifests from assumptions.