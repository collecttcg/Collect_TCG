# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-09-27

## Repositories

- Production: `collecttcg/Collect_TCG`
- Development: `collecttcg/Collect_TCG_Dev`
- Default branch: `main`

Development is the working environment. Production is protected. Production changes require explicit approval.

Repository inspection and current release manifests take precedence if an external change occurs after reconciliation.

## Versioning

`V210` is the final legacy `V###` release. New releases use `YYYY-MM-DD-vNN` with independent Beta/Production daily counters.

## Current Versions

Latest Development: `2026-09-27-v27`

Latest Production: `2026-09-27-v09`

Previous Production: `2026-09-27-v08`

Production functional baseline last promoted from Development: `2026-09-27-v27`

Development version promoted from for Production `2026-09-27-v08`: `2026-09-27-v25`.

Important promotion state:
- Development repository rename is complete: `collecttcg/Collect_TCG_Dev`.
- Current Development release: `2026-09-27-v25`.
- Historical Beta version names and release records remain unchanged.
- Production includes the validated Beta v16 clone fix.
- Development v25 validated application delta is promoted in Production v08. Production retains the v07 inventory/order, routing and Owner Insights baseline while adding the approved QR/CTA inventory watermark renderer and compact continuous Add/Edit owner editor.
- Development-only repository structure (`dev/`) and the Development-only `analytics_test` Insights exclusion are not promoted to Production.
- Beta v20 baseline/documentation release is **not application-code promotion**.

## Production 2026-09-27-v09

Previous Production: `2026-09-27-v08`

Development promoted from: `2026-09-27-v27`

Purpose: promote the validated Development v26-v27 global Bulk Images workflow while preserving Production-only SEO, rollback, QR Generator and analytics behavior.

Changes:
- Adds `Inventory Tools → Bulk Edit → Bulk Images — All Listings` for Owner Mode.
- `Use Originals · All Photos` applies the saved original to every photo in every loaded listing with images.
- `CTA + QR only · All Photos` regenerates the website-only CTA/QR version from each saved clean original across every listing.
- `Logo + CTA + QR · All Photos` remains available globally.
- Bulk Edit no longer shows per-listing selection controls; the selective high-quality reprocess UI remains under `Inventory Tools → Quality`.
- Superseded owned watermark files are cleaned only after reversible metadata and public image URLs save successfully.
- Production QR Generator registration, Production SEO/canonical URLs, Production analytics behavior and rollback safeguards remain Production-specific.
- Development-only `analytics_test` behavior remains excluded from Production.

SQL required: No.

Validation status: completed successfully. Production repository structure and rollback anchor, changed JavaScript syntax, imports/assets, routing/conversion/Owner/privacy regressions, retained v05-v08 behavior, v09 global Bulk Images behavior, SEO generation, full/patch ZIP integrity, final GitHub Pages deployment and rollback-anchor advancement all passed.

Release records:
- Source commit: `77d672aa932db6a7b760cc3176f61b875fa32f7e`
- Final package-validation / last-known-good commit: `840ba48e1f39481229790da0871cccd396b2ac46`
- Full ZIP: `Collect-TCG-Production-2026-09-27-v09-full.zip`
  - SHA-256: `6c1970c56584f5bb18d327f3bb265a4d5eaec5ef6f1a8bfd033e204964a64697`
- Patch ZIP: `Collect-TCG-Production-2026-09-27-v08-to-2026-09-27-v09-patch.zip`
  - SHA-256: `4a9e742b7e603d2276b89c05c65a4113d14baacc0cebcda54d49df919b449290`

Validation limitation: interactive desktop/mobile/Safari browser testing was not available in the current tool environment; browser behavior was not manually exercised.

## Production 2026-09-27-v08

Previous Production: `2026-09-27-v07`

Development promoted from: `2026-09-27-v25`

Purpose: promote the validated Development v25 watermark and compact continuous Add/Edit editor while preserving Production-only SEO, rollback, QR Generator and analytics behavior.

Changes:
- Adds the approved `assets/collect-tcg-inventory-watermark-approved.png` banner used by the reversible owner image watermark flow.
- Inventory watermark generation uses the approved CTA artwork with a regenerated functional QR destination.
- Add/Edit remains one continuous scroll flow with Photos first and Card Details immediately below; the v24 tab experiment is not promoted.
- Large desktop Add/Edit is capped at 1100px, uses a compact 350px photo stage, and uses 3/2/1 photo columns across large desktop/medium/mobile breakpoints.
- Existing PSA privacy, rotation, image ordering/storage, watermark reversibility, Owner Mode, Supabase/RLS and public inventory behavior are preserved.
- Production QR Generator registration, Production SEO/canonical URLs, Production analytics behavior and rollback safeguards remain Production-specific.
- Development-only `analytics_test` behavior remains excluded from Production.
- No SQL migration is required.

Validation status: completed successfully. Production repository structure, rollback anchor, changed JavaScript syntax, relative imports/assets, discovery/routing, Owner/privacy guards, retained v07 behavior, v08 watermark/editor behavior, SEO generation, full/patch ZIP integrity and final GitHub Pages deployment passed. Browser/Safari interactive testing was unavailable in the current tool environment; responsive behavior was statically/workflow validated.

Release records:
- Source commit: `5fa8e4eea3ba8708c87a76c16f22861e6e809898`
- Final package-validation / last-known-good commit: `7e4fdb224d901e747c4d5639d9bfc7952d852d33`
- Full ZIP: `Collect-TCG-Production-2026-09-27-v08-full.zip`
  - SHA-256: `8a9a188a1b7b86a867f9deabd509eda435956a407743daa407f3d9f84cadc023`
- Patch ZIP: `Collect-TCG-Production-2026-09-27-v07-to-2026-09-27-v08-patch.zip`
  - SHA-256: `90ce775a4022a084ab22366bdcce764eef43b8d34b62dbe4c952bb9490909725`

## Production 2026-09-27-v07

Previous Production: `2026-09-27-v07`

Development promoted from: `2026-09-27-v09`

Purpose: promote the validated Development v09 application delta while preserving Production-only SEO, rollback, QR Generator and analytics behavior.

Changes:
- Production SQL migration history is centralized under `migrations/2026/` without changing migration filenames or SQL content.
- Obsolete `PRODUCTION-DEPLOY.txt` is retired; release manifests remain the authoritative package/commit audit trail.
- Existing canonical Owner QR Generator module is registered after Owner Tools/Bulk Status so the retained QR route works.
- Owner Insights SQL help text uses the Production migration filenames/paths.
- Production repository validation checks JavaScript syntax/imports, HTML assets, migration placement/history, baseline presence, QR wiring and Insights CSS.
- Generated SEO pages/manifests remain intentional and retained.
- No database migration is newly required or reapplied by this release.
- Filtered rearranging is supported in Production Inventory/Collection Custom Order: visible cards can be reordered while hidden/non-matching cards keep their existing global slots; game-category order is not rewritten from a filtered view.
- Newly added Inventory cards now enter the existing Custom Order by slab/raw-condition/sealed grouping without reordering existing cards.
- `production-last-known-good` is the managed rollback branch. Before v04 it was manually advanced to validated/deployed Production `2026-09-27-v03` final HEAD `784ee1ac25bfb2b742c444bed395a0d3ad7387f1`; v04 and later advance it automatically after successful Pages deployment.
- The Production release workflow itself waits for the final package-validation commit's GitHub Pages deployment and advances `production-last-known-good` only after that exact deployment succeeds.
- The candidate must descend from the current last-known-good branch, preventing older/replayed releases from moving the rollback point backwards.
- The recommended external disaster-recovery repository is `collecttcg/Collect_TCG_Backup`; repository creation is a one-time GitHub admin action and is not yet completed.
- Inventory pagination and the newer filtered/custom-order behavior are now part of Production.
- Owner Insights includes the validated sales action queue and current Production SQL-help filenames.
- The Development-only `analytics_test` query bypass remains excluded from Production.
- Repository backup does not include live Supabase data; database backup is a separate concern.
- The Zatch Bell game-browser logo is now stored locally at `assets/zatch-bell-card-battle-logo.webp`; Production no longer loads it from the Development repository.

## Production repository structure

- `src/` — active application modules/styles
- `assets/` — local runtime assets
- `cards/` — generated SEO card pages
- `migrations/2026/` — Production SQL migration history
- `tools/` — validation and SEO tooling
- `release-manifests/` — release/package checksum records
- `COLLECT_TCG_BASELINE.md` — current project baseline
- `docs/BACKUP-RECOVERY.md` — Production rollback and external-backup procedure
- `production-last-known-good` branch — most recent successfully deployed validated Production release

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
