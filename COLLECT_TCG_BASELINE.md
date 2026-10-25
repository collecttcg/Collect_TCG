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

Latest Production: `2026-10-25-v02`
Previous Production: `2026-10-25-v01`
Development promoted from: `2026-10-25-v05`
Release manifest: `release-manifests/2026-10-25-v02.txt`
Production package source commit: `5c6eee211b51e405a6d957e1ad13c29877f0ce27`
Initial v02 release/manifest HEAD: `69630c3685228f8e89877549d1692e002a118c86`

### Production package record

- Full ZIP: `Collect-TCG-Production-2026-10-25-v02-full.zip`
- Full SHA256: `e0139b2481b170fa0d18765a7dd2246696494def9d02a09a5f58ad0ad6eb6dab`
- Patch ZIP: `Collect-TCG-Production-2026-10-25-v01-to-2026-10-25-v02-patch.zip`
- Patch SHA256: `57ed8a291fb4d2543d5cbba6960e8e643e6b400ea55926d110db10672ce151c0`

## Production 2026-10-25-v02

Purpose: reconcile the already-deployed scanner stylesheet/loader work and repair Production release bookkeeping/workflow safety without changing the approved scanner backend or promoting Development v06.

Changes retained in v02:
- Owner AI Card Scanner stylesheet is canonical at `src/styles/30-ai-card-scanner.css`.
- Scanner stylesheet loader is canonical at `src/features/owner/card-scanner-style.js` and is registered by Production `src/main.js`.
- Existing Owner-only scanner authorization and Production `scan-card-ai` endpoint remain unchanged.
- Production release workflow now packages `2026-10-25-v02` against previous Production `2026-10-25-v01`.
- The workflow records Development promoted from `2026-10-25-v05`.
- Accepted release manifests are immutable: scheduled/later runs do not overwrite an existing manifest.
- The accidentally rewritten historical `release-manifests/2026-10-16-v02.txt` was restored to its accepted original source commit/checksums.
- Existing Production SEO, QR Generator, Owner tools, analytics/privacy boundaries, Contact to Buy, giveaways and generators remain retained.
- Development v06 scanner error-reporting remains Development-only and was not promoted.

SQL required: No.

### Production scanner backend

- Supabase project: Collect TCG Website (`cbzytysxtdcqxuckspye`).
- Production Edge Function: `scan-card-ai`.
- Function version at the scanner promotion: 1.
- Status: ACTIVE.
- `verify_jwt`: true.
- Deployed function SHA256: `73c4883287c5d88f32263289fe0ab4b91ade6e13f2089050dd6b092cdda99cd7`.
- Development remains on `scan-card-ai-dev`.

### Validation status

Completed for Production v02 reconciliation:
- Production repository/JavaScript validation executed successfully.
- Consolidated CSS validation executed successfully.
- Retained Post Generator checks executed successfully.
- SEO generator syntax/self-test/generation checks executed successfully.
- Generated SEO output validation executed successfully.
- Full and patch ZIPs were created and integrity checked.
- Package artifact upload succeeded.
- Correct v02 release manifest/checksums were recorded.
- Exact final release/manifest Pages deployment succeeded.
- `production-last-known-good` advancement completed successfully after Pages success.

Validation limitations:
- Live Production was not manually opened, to avoid contaminating Insights.
- Authenticated Owner image scanning was not interactively exercised in a Production browser session.
- Interactive desktop/mobile/Safari browser testing was not performed for this release-state reconciliation.

## Historical release integrity

`2026-10-25-v01` is the previous Production release and remains recorded by `release-manifests/2026-10-25-v01.txt`.

`release-manifests/2026-10-16-v02.txt` is an older accepted historical record. It was restored after an outdated workflow accidentally rewrote its source/checksum fields. Future workflow runs must not modify accepted historical manifests.

Audit note for the repaired stale validator: the pre-v02 baseline contained `Latest Production: `2026-10-25-v01`` and `Previous Production: `2026-10-16-v02``. These are historical values only; the authoritative current state is the Current Production section above.

## Development relationship

Production v02 records Development `2026-10-25-v05` as the promoted Development state. Development `2026-10-25-v06` is separately completed/validated but its scanner error-reporting change is not part of Production v02.

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

No new SQL migration was required for Production `2026-10-25-v02`. Existing Production migrations remain under `migrations/2026/`. Never claim SQL was applied unless actually confirmed.

## Release and validation contract

A Production release is complete only after implementation, independent Production validation, regression review, committed-file inspection, full/patch package creation, checksum verification, immutable release manifest recording, successful Pages deployment and rollback protection where available.

Do not live-open Production for testing unless explicitly authorized because it may contaminate Insights.
