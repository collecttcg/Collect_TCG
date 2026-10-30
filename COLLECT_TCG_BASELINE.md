# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-10-30

## Repositories

- Production: `collecttcg/Collect_TCG`
- Development: `collecttcg/Collect_TCG_Dev`
- Default branch: `main`
- Development is the normal working environment.
- Production is protected and is modified/promoted only when explicitly authorized.

Reconciliation priority: current GitHub HEAD > latest valid release manifest > this baseline > recent Project context > older context.

## Versioning

- `V210` is the final legacy `V###` release; historical releases are never renamed.
- Current releases use `YYYY-MM-DD-vNN`; Development and Production counters are independent.
- Historical release manifests are immutable.

## Current Development

Latest validated Development release: `2026-10-30-v06`
Previous Development: `2026-10-30-v05`
Development release manifest: `release-manifests/2026-10-30-v06.txt`
Development v06 package source commit: `6e32e6221ea041a09e601b82819a914577cc0383`
Development v06 manifest commit: `53a3c87e2d32e7eb620a4444d2e016c639527da4`

### Development package record — 2026-10-30-v06

- Full ZIP: `Collect-TCG-Dev-2026-10-30-v06-full.zip`
- Full SHA256: `41e65ed67ea5d14b255a7d7567a35a6bdce157dfff5fecf68cf2616ccb237dc3`
- Patch ZIP: `Collect-TCG-Dev-2026-10-30-v05-to-2026-10-30-v06-patch.zip`
- Patch SHA256: `80f2801ff8e17f7c6314c402a7d94b74e5546b9768dc8e1bf3cb7cf1b1543d6e`

### Development 2026-10-30-v06 retained/current state

- Owner Add/Edit accepts JPEG, PNG, WebP, HEIC and HEIF, including HEIC/HEIF sequence MIME variants.
- HEIC/HEIF conversion remains Owner-only and client-side before the established image resize/validation/upload pipeline.
- Native browser HEIC decode is attempted first; fallback decoder is pinned `heic-to` 1.6.7 loaded on demand from jsDelivr.
- Existing JPEG/PNG/WebP behavior and established image-size limits remain unchanged.
- Owner Inventory Tools → Bulk Edit retains `Unassigned Owners`, private Card Owner assignment and 100-row chunking.
- Contact → Official eBay Accounts and eBay Ban List account shortcuts remain retained.
- No SQL/schema/RLS/Edge Function change was required.

## Current Production

Latest Production: `2026-10-30-v04`
Previous Production: `2026-10-30-v03`
Development promoted from: `2026-10-30-v06`
Production release manifest: `release-manifests/2026-10-30-v04.txt`
Production v04 package source commit: `d9956480c288128206814f52af16a9fd376d1753`
Production last-known-good / release manifest commit: `24383c875d63992fcf302cce5fc3b752215c34de`

### Production package record — 2026-10-30-v04

- Full ZIP: `Collect-TCG-Production-2026-10-30-v04-full.zip`
- Full SHA256: `f0dc80b9ffd1685d486d69310e5a571ea4200e3c42334ffbdce6d5be259ddaf9`
- Patch ZIP: `Collect-TCG-Production-2026-10-30-v03-to-2026-10-30-v04-patch.zip`
- Patch SHA256: `4c52a4404ac0192cf3bbc91b124d77de776857a39e48e115ef40b7f7ffab9097`

### Production 2026-10-30-v04

Purpose: promote the validated modern iPhone HEIC decoder path from Development `2026-10-30-v06` while preserving Production-specific behavior.

Retained/current behavior:
- Owner Add/Edit accepts HEIC/HEIF plus JPEG/PNG/WebP.
- Native browser decode is attempted first; fallback uses pinned `heic-to` 1.6.7 and converts to JPEG before the existing image pipeline.
- Owner authorization and existing image-size limits remain in force; no public upload surface was added.
- Owner Inventory Tools → Bulk Edit retains Unassigned Owners assignment and private `card_owner_private` storage.
- Production scanner remains `scan-card-ai`; Development-only `scan-card-ai-dev` must not appear in Production runtime code.
- QR Generator, eBay account links, eBay Ban List, SEO, analytics/privacy boundaries, Contact to Buy, giveaways, generators, Buyer Messages and established Owner tools remain retained.
- Existing eBay Ban List database/RLS state remains unchanged.

SQL required: No.

### Production v04 validation status

Completed:
- rollback-anchor validation;
- all Production JavaScript syntax validation;
- Production repository/reference validation;
- modern HEIC Add/Edit integration contract and decoder availability validation;
- CSS, Post Generator and SEO validation;
- full and patch ZIP creation and integrity checks;
- package artifact upload;
- immutable Production manifest/checksum recording;
- GitHub Pages deployment confirmation;
- `production-last-known-good` advanced after successful deployment.

Validation limitations:
- Live Production was not manually opened to avoid contaminating Insights.
- The user's exact `IMG_6923.HEIC` was not available as a file for interactive upload testing; validation covered syntax, wiring, decoder availability and integration contracts.
- Interactive desktop/mobile/Safari browser testing was not performed during this promotion.

## Earlier validated state retained

- Development `2026-10-30-v05` is immutable; it was the prior HEIC compatibility iteration superseded by v06.
- Development `2026-10-30-v04` and Production `2026-10-30-v03` are immutable; they introduced/promoted initial HEIC/HEIF listing-photo support.
- Development `2026-10-30-v03` and Production `2026-10-30-v02` remain immutable; they introduced/promoted corrected Unassigned Owners assignment.
- Development `2026-10-30-v02` is immutable; it first packaged the Unassigned Owners feature/runtime correction.
- Development and Production `2026-10-30-v01` remain immutable; Production v01 promoted approved eBay account-link changes.
- Production `2026-10-27-v02` remains immutable. Its manifest records `Development promoted from: 2026-10-27-v02` despite no matching immutable Development v02 manifest; do not rewrite it.
- Development `2026-10-25-v09` custom Inventory Manager/dashboard UI remains superseded by the established compact Inventory Tools workspace.
- Production `2026-10-25-v03` added/promoted the Owner eBay Ban List and migration `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`; that migration was applied and verified on Supabase project `cbzytysxtdcqxuckspye`.
- Older accepted manifests remain historical immutable records.

## Canonical retained behavior

Preserve unless explicitly changed:
- public card pages, SEO, stable URLs and SPA/history behavior;
- Related Cards, Trending and discovery attribution;
- Inventory/Collection/Sold/Reserved/Favorites flows;
- Owner Mode and owner-only Add/Edit/Delete/bulk/lifecycle/export tools;
- Owner listing photo support for JPEG, PNG, WebP, HEIC and HEIF;
- established compact Owner Inventory Tools and specialist subtools;
- Owner-only Card Owner categories and Unassigned Owners assignment workflow;
- Available inventory value in Owner Overview;
- Owner-only Buyer Messages, private analytics and Buyer Preview privacy;
- Owner-only AI Card Scanner and shared eBay Ban List;
- QR Generator, Post Generators and giveaway functionality;
- Contact to Buy intents and Malaysia/Singapore purchase messaging;
- Supabase/RLS behavior and analytics boundaries;
- Safari-safe purchase/contact layout;
- Development analytics-test exclusion behavior in Development only.

## Intentionally removed / excluded

Do not restore unless explicitly requested:
- Download Share Preview;
- V200 multi-card inquiry basket;
- V201 custom Share menu/grid;
- V202 share-menu experiment;
- V203/V204 compact-layout experiments;
- abandoned/superseded scanner/layout experiments;
- old Beta runtime dependencies;
- Development-only analytics-test behavior in Production;
- post-v09 duplicate custom Inventory Manager/dashboard renderer.

## SQL / database baseline

- Latest relevant Production migration remains `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`.
- Shared `public.ebay_banlist` remains Owner-only through RLS.
- Card Owner assignment continues to use existing private `card_owner_private` metadata and authorization.
- HEIC/HEIF support is client-side and required no SQL/database/RLS/Edge Function change for Development `2026-10-30-v06` or Production `2026-10-30-v04`.
- Never claim SQL, policies, Edge Functions or backend changes were applied unless confirmed.

## Release and validation contract

A release is complete only after applicable implementation, validation, regression review, committed-file inspection, package creation/integrity checks, immutable manifest recording, Pages deployment and rollback protection are confirmed. A commit alone is not completion.

Terminology:
- **Tested** = executed/exercised.
- **Statically verified** = repository/code inspection only.
- **Not tested** = unavailable/not performed.

Do not live-open Production for testing unless explicitly authorized because it may contaminate Insights.

## Baseline maintenance

Reconcile `COLLECT_TCG_BASELINE.md` in both Development and Production repositories after every accepted release or meaningful environment-state change. Preserve historical release facts and retained/removed behavior; never rewrite immutable release manifests from assumptions.
