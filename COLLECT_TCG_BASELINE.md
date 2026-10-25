# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-10-25

## Repositories

- Production: `collecttcg/Collect_TCG`
- Development: `collecttcg/Collect_TCG_Dev`
- Default branch: `main`
- Development is the normal working environment.
- Production is protected and is modified/promoted only when explicitly authorized.

Reconciliation priority: current GitHub HEAD > latest valid release manifest > this baseline > recent Project conversations > older conversations.

## Versioning

- `V210` is the final legacy `V###` release; historical releases are never renamed.
- Current releases use `YYYY-MM-DD-vNN` with the actual build date; Development and Production counters are independent.
- Production full: `Collect-TCG-Production-YYYY-MM-DD-vNN-full.zip`
- Production patch: `Collect-TCG-Production-OLD-to-NEW-patch.zip`
- Development full: `Collect-TCG-Dev-YYYY-MM-DD-vNN-full.zip`
- Development patch: `Collect-TCG-Dev-OLD-to-NEW-patch.zip`
- SQL: `YYYY-MM-DD-vNN-DESCRIPTIVE-NAME.sql`

## Current Production

Latest Production: `2026-10-25-v03`
Previous Production: `2026-10-25-v02`
Development promoted from: `2026-10-25-v08`
Release manifest: `release-manifests/2026-10-25-v03.txt`
Production package source commit: `48983c7c9ab8cbd53fbd46084bb3709a70b99eba`
Initial v03 release/manifest HEAD: `9e442644a1151f1773bd3c7b79db7b0dd8d77188`

### Production package record

- Full ZIP: `Collect-TCG-Production-2026-10-25-v03-full.zip`
- Full SHA256: `bbe483cbf4464193e584c0ff9393c1969f0cd28c5ce35ea1832e4cfe0223d382`
- Patch ZIP: `Collect-TCG-Production-2026-10-25-v02-to-2026-10-25-v03-patch.zip`
- Patch SHA256: `8469782b344b88fb5d6a69051bcb2ce2363e8b023aa1c9c94d2e7702e8baffd4`

## Production 2026-10-25-v03

Purpose: promote the completed Development `2026-10-25-v08` owner-tool changes while preserving Production-only behavior and release safeguards.

Changes retained in v03:
- Owner AI Card Scanner surfaces backend JSON error/message details for non-2xx `scan-card-ai` responses instead of only the generic invoke error.
- Scanner remains on the Production `scan-card-ai` Edge Function; `scan-card-ai-dev` is not referenced by Production runtime code.
- Added Owner-only shared eBay Ban List with add/edit/remove/search/copy controls and four shortcuts to eBay Blocked Buyers.
- eBay Ban List remains hidden from public users and is additionally protected by Supabase RLS through `public.is_app_owner()`.
- Includes the corrected Owner navigation insertion logic from Development v08, preventing the v07 `insertBefore` startup regression when the Export control is nested under a different DOM parent.
- Production-specific QR Generator registration is retained.
- Existing Production SEO, analytics/privacy boundaries, Contact to Buy, giveaways, generators and Owner tools remain retained.
- The eBay Ban List stylesheet is colocated with its Production feature module at `src/features/owner/ebay-banlist.css`, preserving the consolidated global Production stylesheet set.

SQL required: Yes.
SQL migration: `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`.
SQL status: Applied to Production Supabase project `cbzytysxtdcqxuckspye` and verified: RLS enabled, anon SELECT denied, authenticated table access granted subject to four Owner-only RLS policies.

### Production scanner backend

- Supabase project: Collect TCG Website (`cbzytysxtdcqxuckspye`).
- Production Edge Function: `scan-card-ai`.
- `verify_jwt`: true.
- Development remains on `scan-card-ai-dev`.

### Validation status

Completed for Production v03:
- Production repository/JavaScript validation executed successfully, including syntax/import checks.
- Consolidated CSS validation executed successfully.
- Retained Post Generator checks executed successfully.
- SEO generator syntax/self-test/generation checks executed successfully.
- Generated SEO output validation executed successfully.
- Production-specific checks confirmed eBay Ban List registration, migration presence, Production scanner endpoint and absence of the Development scanner endpoint.
- Full and patch ZIPs were created and integrity checked.
- Package artifact upload succeeded.
- Immutable v03 release manifest/checksums were recorded.
- Exact final release/manifest Pages build and deployment succeeded.
- `production-last-known-good` advancement completed successfully after Pages success.
- Production Supabase eBay Ban List migration was applied and its RLS/grants/policy count were queried successfully.

Validation limitations:
- Live Production was not manually opened, to avoid contaminating Insights.
- Authenticated Owner scanner and eBay Ban List were not interactively exercised in a Production browser session.
- Interactive desktop/mobile/Safari browser testing was not performed.

## Current Development relationship

Latest validated Development: `2026-10-25-v08`
Previous Development: `2026-10-25-v07`
Development release manifest: `release-manifests/2026-10-25-v08.txt` in `collecttcg/Collect_TCG_Dev`.

Development v08 is the corrected validated successor to v07. v07 introduced the eBay Ban List but exposed a runtime Owner-navigation `insertBefore` regression. v08 corrected that DOM insertion path and added dedicated regression coverage before promotion to Production v03.

Development remains the working environment for subsequent changes.

## Historical release integrity

`2026-10-25-v02` is the previous Production release and remains recorded by `release-manifests/2026-10-25-v02.txt`.

Production v02 recorded Development promoted from: `2026-10-25-v05` and intentionally did not promote Development v06 scanner error reporting.

`release-manifests/2026-10-16-v02.txt` is an older accepted historical record. It was restored after an outdated workflow accidentally rewrote its source/checksum fields. Future workflow runs must not modify accepted historical manifests.

Audit note for repaired stale validator compatibility: the pre-v02 baseline contained Latest Production: `2026-10-25-v01` and Previous Production: `2026-10-16-v02`. These are historical values only; the authoritative current state is the Current Production section above.

## Production repository structure

- `src/` — active application modules/styles
- `assets/` — local runtime assets
- `cards/` — generated SEO card pages
- `migrations/2026/` — Production SQL migration history
- `tools/` — validation and SEO tooling
- `release-manifests/` — immutable release/package checksum records
- `COLLECT_TCG_BASELINE.md` — current project baseline
- `docs/BACKUP-RECOVERY.md` — Production rollback procedure
- `production-last-known-good` — validated deployed Production rollback anchor

## Retained behavior

Do not accidentally remove or expose:
- public card pages, SEO, stable URLs and SPA/history behavior;
- Related Cards, Trending and discovery attribution;
- Inventory/Collection/Sold/Reserved/Favorites flows;
- Owner Mode and owner-only Add/Edit/Delete/bulk/lifecycle/export tools;
- Owner private analytics and Buyer Preview privacy;
- Owner-only AI Card Scanner;
- Owner-only shared eBay Ban List;
- QR Generator;
- Facebook/Carousell/eBay/Post Generator and giveaway functionality;
- Contact to Buy intents: Availability, Make an offer, More photos / video, COD / meetup;
- Malaysia & Singapore purchase messaging and negotiable international shipping;
- Supabase/RLS behavior and analytics boundaries;
- Safari-safe purchase/contact layout.

## Intentionally removed / excluded

Do not restore unless explicitly requested:
- Download Share Preview;
- V200 multi-card inquiry basket;
- V201 custom Share menu/grid;
- V202 share-menu experiment;
- V203/V204 compact-layout experiments;
- abandoned/superseded scanner/layout experiments;
- Development-only analytics-test behavior in Production.

## SQL / database baseline

Production `2026-10-25-v03` added and applied `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`. Existing Production migrations remain under `migrations/2026/`. Never claim SQL was applied unless actually confirmed.

The shared `public.ebay_banlist` table is Owner-only through RLS. Its presence must not expose Owner functionality to public users.

## Refactoring candidates — not approved changes

Potential future work should begin in Development and preserve current behavior. Highest-value candidates identified after the v07 navigation regression:
- centralize Owner navigation and route registration so individual features do not manipulate navigation DOM independently;
- add shared safe DOM insertion/element/clipboard/notification helpers;
- isolate Supabase table operations behind small service/repository modules;
- reduce duplicated Owner feature CSS while preserving exact visuals;
- expand reusable Owner-route regression coverage for application startup, nested navigation, public-user exclusion, missing DOM targets and route rendering;
- consolidate common validation/release tooling where safe while preserving the separation between Development and protected Production workflows.

These are planning candidates only and are not authorization to refactor Production. Avoid broad rewrites. Prefer incremental Dev-only refactors with behavior-preserving validation after each subsystem.

## Release and validation contract

A Production release is complete only after implementation, independent Production validation, regression review, committed-file inspection, full/patch package creation, checksum verification, immutable release manifest recording, successful Pages deployment and rollback protection where available.

A commit is not completion. Use reporting terms precisely: Tested = executed/exercised; Statically verified = repository/code inspection; Not tested = unavailable/not performed.

Do not live-open Production for testing unless explicitly authorized because it may contaminate Insights.

## Baseline maintenance

Reconcile this file after accepted releases and material project-state changes. Historical release manifests are immutable and later workflows must not overwrite their source commit or checksums.
