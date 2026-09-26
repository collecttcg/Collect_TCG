# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-09-27

## Repositories

- Production: `collecttcg/Collect_TCG`
- Beta: `collecttcg/Collect_TCG_Beta`
- Default branch: `main`

Beta is development. Production is protected. Production changes require explicit approval.

Repository inspection and current release manifests take precedence if an external change occurs after reconciliation.

## Versioning

`V210` is the final legacy `V###` release. New releases use `YYYY-MM-DD-vNN` with independent Beta/Production daily counters.

## Current Versions

Latest Beta: `2026-09-26-v20`

Latest Production: `2026-09-27-v01`

Previous Production: `2026-09-26-v08`

Production functional baseline was last promoted from Beta: `2026-09-26-v16`

Beta promoted from for Production `2026-09-27-v01`: none — Production-only repository cleanup.

Important promotion state:
- Production includes the validated Beta v16 clone fix.
- Beta v18 new-card Custom Order insertion behavior is **not promoted to Production**.
- Beta v19 Beta-repository cleanup/structure changes are **not application-code promotion**.
- Beta v20 baseline/documentation release is **not application-code promotion**.

## Production 2026-09-27-v01

Purpose: clean and normalize the Production repository without promoting newer Beta application behavior.

Changes:
- Production SQL migration history is centralized under `migrations/2026/` without changing migration filenames or SQL content.
- Obsolete `PRODUCTION-DEPLOY.txt` is retired; release manifests remain the authoritative package/commit audit trail.
- Existing canonical Owner QR Generator module is registered after Owner Tools/Bulk Status so the retained QR route works.
- Owner Insights SQL help text uses the Production migration filenames/paths.
- Production repository validation checks JavaScript syntax/imports, HTML assets, migration placement/history, baseline presence, QR wiring and Insights CSS.
- Generated SEO pages/manifests remain intentional and retained.
- No database migration is newly required or reapplied by this cleanup.

## Production repository structure

- `src/` — active application modules/styles
- `assets/` — local runtime assets
- `cards/` — generated SEO card pages
- `migrations/2026/` — Production SQL migration history
- `tools/` — validation and SEO tooling
- `release-manifests/` — release/package checksum records
- `COLLECT_TCG_BASELINE.md` — current project baseline

## Retained behavior

Do not accidentally remove or expose:
- public card pages, SEO, stable URLs and SPA/history behavior
- Related Cards, Trending and discovery attribution
- Inventory/Collection/Sold/Reserved/Favorites flows
- Owner Mode and owner-only Add/Edit/Delete/bulk/lifecycle/export tools
- Owner private analytics and Buyer Preview privacy
- QR Generator
- Facebook/Carousell/Giveaway generators and giveaway winner/images
- Contact to Buy intents: Availability, Make an offer, More photos / video, COD / meetup
- Malaysia & Singapore purchase messaging and negotiable international shipping
- Supabase/RLS behavior and analytics exclusion
- Safari-safe purchase/contact layout

## Intentionally removed / excluded

Do not restore unless explicitly requested:
- Download Share Preview
- V200 multi-card inquiry basket
- V201 custom Share menu/grid
- V202 share-menu experiment
- V203/V204 compact-layout experiments

## SQL / database baseline

Production migrations:
- `migrations/2026/2026-09-15-v10-LANGUAGE-DETAILS.sql`
- `migrations/2026/2026-09-15-v13-EXTEND-LANGUAGE-OPTIONS.sql`
- `migrations/2026/2026-09-17-v05-COUNTRY-CARD-DEMAND.sql`
- `migrations/2026/2026-09-24-v01-SEO-PUBLIC-CATALOG.sql`
- `migrations/2026/2026-09-24-v05-DISCOVERY-ATTRIBUTION.sql`
- `migrations/2026/2026-09-24-v06-DISCOVERY-SUMMARY.sql`
- `migrations/2026/2026-09-26-v05-PUBLIC-HIDDEN-LISTING-GUARD.sql`

Moving these files does not apply or reapply SQL. Never claim SQL was applied unless actually confirmed.

## Validation / packaging

A Production release is complete only after implementation, independent Production validation, regression review, committed-file inspection, full/patch package creation and checksum verification.

Do not live-open Production for testing unless explicitly authorized because it may contaminate Insights.
