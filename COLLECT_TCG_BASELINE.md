# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-10-25

## Repositories

- Production: `collecttcg/Collect_TCG`
- Development: `collecttcg/Collect_TCG_Dev`
- Default branch: `main`
- Development is the working environment.
- Production is protected. Never modify, promote, deploy, prepare, or live-test Production unless explicitly requested.

Reconciliation priority: current GitHub HEAD > latest release manifest > this baseline > recent Project conversations > older conversations.

## Versioning

- `V210` is the final legacy `V###` release; historical releases are never renamed.
- Current releases use `YYYY-MM-DD-vNN` with the actual build date; Development and Production counters are independent.
- Production full: `Collect-TCG-Production-YYYY-MM-DD-vNN-full.zip`
- Production patch: `Collect-TCG-Production-OLD-to-NEW-patch.zip`
- Development full: `Collect-TCG-Dev-YYYY-MM-DD-vNN-full.zip`
- Development patch: `Collect-TCG-Dev-OLD-to-NEW-patch.zip`
- SQL: `YYYY-MM-DD-vNN-DESCRIPTIVE-NAME.sql`

## Current Production

Latest Production: `2026-10-25-v01`

Previous Production: `2026-10-16-v02`

Development promoted from: `2026-10-25-v05`

Release manifest: `release-manifests/2026-10-25-v01.txt`

Production application source commit recorded by manifest: `e08599649dc87ed7a869b7e7b1ea4b389053dc94`

Final release/manifest HEAD before this baseline-only reconciliation: `7bd74334c08026921de0093212e1bcf096be2cc7`

`production-last-known-good` was advanced to `7bd74334c08026921de0093212e1bcf096be2cc7` after the exact GitHub Pages deployment completed successfully.

### Production package record

- Full ZIP: `Collect-TCG-Production-2026-10-25-v01-full.zip`
- Full SHA256: `231595e86b0bf296890e38a8c0f32ec36005b4731aa88e55b2c42c3a5e182372`
- Patch ZIP: `Collect-TCG-Production-2026-10-16-v02-to-2026-10-25-v01-patch.zip`
- Patch SHA256: `8bb782965ed33967610fa9683d7def0d47c33603ee2329be69bbfd0d6cb5e704`

## Production 2026-10-25-v01

Purpose: promote the approved Owner-only AI Card Scanner from Development while preserving Production-specific public, Owner, analytics, SEO, Supabase/RLS, Contact to Buy, generator, giveaway, QR and rollback behavior.

Changes:
- Adds the Owner-only AI Card Scanner to the Production Add/Edit workflow.
- Uses the Production Supabase Edge Function `scan-card-ai`; Development continues to use `scan-card-ai-dev`.
- Production `scan-card-ai` is ACTIVE, version 1, with JWT verification enabled.
- Server-side owner authorization remains required; public users do not gain scanner or Owner capabilities.
- Gemini API credentials remain server-side only.
- AI identification and market-price research remain recommendations; detected values are not saved until the Owner applies/saves them.
- Raw/Sealed results clear grading-company, grade and certification values.
- Raw and graded market comparisons remain separated.
- Scanner Series detection includes the promoted One Piece Carddass Hyper Battle canonical mapping work, including deterministic correction for supported vintage card-code families instead of relying only on Gemini guesses.
- Existing Production QR Generator, CHECK FULL INVENTORY watermark behavior, SEO/canonical/indexing, analytics/privacy boundaries, Owner tools, Contact to Buy, giveaways and generators are retained.
- Development-only analytics exclusion behavior is not promoted as Production behavior.

SQL required: No.

### Production scanner backend

- Supabase project: Collect TCG Website (`cbzytysxtdcqxuckspye`).
- Production Edge Function: `scan-card-ai`.
- Function version at promotion: 1.
- Status: ACTIVE.
- `verify_jwt`: true.
- Deployed function SHA256: `73c4883287c5d88f32263289fe0ab4b91ade6e13f2089050dd6b092cdda99cd7`.
- Development function remains `scan-card-ai-dev`; do not point Production at the Development endpoint.

### Validation status

Completed for the Production promotion:
- Production repository/JavaScript validation executed.
- Consolidated CSS validation executed.
- Retained Post Generator checks executed.
- SEO generator syntax/self-test/generation checks executed.
- Production packages were created and integrity/checksum records were written to the release manifest.
- GitHub Pages deployment for final release HEAD `7bd74334c08026921de0093212e1bcf096be2cc7` completed successfully.
- `production-last-known-good` was advanced only after the successful deployment.

Validation limitations:
- Live Production was not manually opened, to avoid contaminating Insights.
- Authenticated Owner image scanning was not interactively exercised in a Production browser session.
- Interactive desktop/mobile/Safari browser testing was not performed for the scanner promotion; repository/static/workflow validation and backend deployment were confirmed.

## Previous Production

`2026-10-16-v02` remains the previous Production release. Its historical manifest must remain unchanged:
- `release-manifests/2026-10-16-v02.txt`

Do not let later workflow runs rewrite historical release manifests or package checksums.

## Development relationship

Production `2026-10-25-v01` records Development `2026-10-25-v05` as the promoted Development state in the release manifest.

Development remains the working environment for future changes. New scanner changes must be implemented and validated in `collecttcg/Collect_TCG_Dev` first unless the user explicitly authorizes a direct Production operation.

## Production repository structure

- `src/` — active application modules/styles
- `assets/` — local runtime assets
- `cards/` — generated SEO card pages
- `migrations/2026/` — Production SQL migration history
- `tools/` — validation and SEO tooling
- `release-manifests/` — release/package checksum records
- `COLLECT_TCG_BASELINE.md` — current project baseline
- `docs/BACKUP-RECOVERY.md` — Production rollback/external-backup procedure where present
- `production-last-known-good` branch — validated deployed Production rollback anchor

## Retained behavior

Do not accidentally remove or expose:
- public card pages, SEO, stable URLs and SPA/history behavior
- Related Cards, Trending and discovery attribution
- Inventory/Collection/Sold/Reserved/Favorites flows
- Owner Mode and owner-only Add/Edit/Delete/bulk/lifecycle/export tools
- Owner private analytics and Buyer Preview privacy
- Owner-only AI Card Scanner
- QR Generator
- Facebook/Carousell/eBay/Post Generator behavior and giveaway generator/winner/images
- Contact to Buy intents: Availability, Make an offer, More photos / video, COD / meetup
- Malaysia & Singapore purchase messaging and negotiable international shipping
- Supabase/RLS behavior and analytics boundaries
- Safari-safe purchase/contact layout

## Intentionally removed / excluded

Do not restore unless explicitly requested:
- Download Share Preview
- V200 multi-card inquiry basket
- V201 custom Share menu/grid
- V202 share-menu experiment
- V203/V204 compact-layout experiments
- abandoned scanner/layout experiments that were superseded before the promoted release
- Development-only analytics-test behavior in Production

## SQL / database baseline

No new SQL migration was required for Production `2026-10-25-v01`.

Existing Production migrations remain under `migrations/2026/`. Moving or retaining migration files does not apply SQL. Never claim SQL was applied unless actually confirmed.

## Release and validation contract

A Production release is complete only after implementation, independent Production validation, regression review, committed-file inspection, full/patch package creation, checksum verification, release manifest recording, successful Pages deployment and rollback protection where available.

Do not live-open Production for testing unless explicitly authorized because it may contaminate Insights.

Historical release manifests are immutable records. A later push, scheduled workflow or baseline-only reconciliation must not silently regenerate or overwrite an already accepted historical release.
