# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-09-28

## Repositories

- Production: `collecttcg/Collect_TCG`
- Development: `collecttcg/Collect_TCG_Dev`
- Default branch: `main`

Development is the working environment. Production is protected. Production changes require explicit approval.

Repository inspection and current release manifests take precedence if an external change occurs after reconciliation.

## Versioning

`V210` is the final legacy `V###` release. New releases use `YYYY-MM-DD-vNN` with independent Beta/Production daily counters.

## Current Versions

Latest Development: `2026-09-29-v05`

Latest Production: `2026-09-29-v03`

Previous Production: `2026-09-29-v02`

Production functional baseline last promoted from Development: `2026-09-29-v05`

Development version promoted from for Production `2026-09-27-v08`: `2026-09-27-v25`.

Important promotion state:
- Development repository rename is complete: `collecttcg/Collect_TCG_Dev`.
- Current Development release: `2026-09-29-v05`.
- Historical Beta version names and release records remain unchanged.
- Production includes the validated Beta v16 clone fix.
- Development v25 validated application delta is promoted in Production v08. Production retains the v07 inventory/order, routing and Owner Insights baseline while adding the approved QR/CTA inventory watermark renderer and compact continuous Add/Edit owner editor.
- Development-only repository structure (`dev/`) and the Development-only `analytics_test` Insights exclusion are not promoted to Production.
- Beta v20 baseline/documentation release is **not application-code promotion**.

## Production 2026-09-29-v03

Previous Production: `2026-09-29-v02`

Development promoted from: `2026-09-29-v05`

Purpose: promote the validated landscape-aware Collect TCG website QR/CTA watermark sizing from Development v05.

Changes:
- Keeps the existing 82% width target for portrait/card images.
- Adds a 24% source-image-height cap to the website QR/CTA banner sizing so sufficiently wide landscape photos receive a smaller watermark.
- The supplied 1080×607 landscape case computes at about 670×146 px instead of about 886×193 px.
- Retains the approved banner artwork, regenerated QR interior, bottom placement and portrait behavior.
- Does not crop or otherwise resize the uploaded source image differently.
- Retains Production v02 owner generator/session behavior, Production-only SEO/canonical behavior, QR Generator, analytics boundaries, private-route protections and rollback safeguards.
- Excludes Development-only repository structure and `analytics_test` behavior.

SQL required: No.

Validation status: completed successfully. The first Production workflow attempt stopped on one stale retained v08 watermark cache assertion; the assertion was corrected and the full validation chain reran successfully. Changed JavaScript syntax, Production imports/assets/repository structure, retained QR Generator and analytics boundaries, prior watermark/editor behavior, eBay generator behavior, owner/session restoration, private-route/privacy protections, generated SEO, and the dedicated v03 landscape/portrait sizing cases all passed. The dedicated v03 executable check confirmed the supplied 1080×607 landscape case is reduced and capped while a representative portrait image retains the existing 82% width sizing. Release packaging, final GitHub Pages deployment and last-known-good advancement completed successfully. Downloaded release ZIPs passed independent `unzip -t` integrity checks and SHA-256 matched the manifest.

Release records:
- Source/generated commit: `488f5d47faab8e7a8dbf03f99b755d74e06f4925`
- Package-validation / last-known-good commit: `9a24962ad3c330da356469e117e7921030ef1322`
- Workflow run: `36526339872`
- Package-validation Pages run: `36526373945`
- Full ZIP: `Collect-TCG-Production-2026-09-29-v03-full.zip`
  - SHA-256: `8ac9446955885e8b624a55618dc26070e9d9609a44a876894fae67c47bdba9c7`
- Patch ZIP: `Collect-TCG-Production-2026-09-29-v02-to-2026-09-29-v03-patch.zip`
  - SHA-256: `fb7283356ffb75cffbf3a69d230ee1fefdd9db2335b6fc994ca9452db5e968c4`

Validation limitation: interactive desktop/mobile/Safari browser testing was not performed. Live Production was not manually opened, to avoid contaminating Insights.

## Production 2026-09-29-v02

Previous Production: `2026-09-29-v01`

Development promoted from: `2026-09-29-v04`

Purpose: promote the validated Development 2026-09-29-v01 through v04 owner generator and owner-route/session-restoration improvements.

Changes:
- Adds direct Facebook, Carousell and eBay generator shortcuts to owner card quick actions while preserving existing listing eligibility.
- Opens card Post Generators in a separate tab and carries the selected card into the existing generator.
- Restores the persisted Supabase Owner session before final owner-only route enforcement on refresh/new-tab startup.
- Retries a transient owner verification once after a server-confirmed user/session check and retries owner-card loading once before the existing fail-closed public fallback.
- Makes the central router the single owner-only route gate; UI state application no longer redirects Insights/Post Generator Tools prematurely.
- Makes Production browser auth persistence/auto-refresh configuration explicit.
- Retains Production-only QR Generator registration, SEO/canonical behavior, analytics boundaries and rollback safeguards.
- Excludes Development-only repository structure and `analytics_test` behavior.

SQL required: No.

Validation status: completed successfully. Changed JavaScript syntax, Production imports/assets/repository structure, direct FB/Carousell/eBay owner generator actions, selected-card preselection, separate-tab handoff behavior, persisted-session-first owner-route restoration, transient owner-verification retry, owner catalogue retry, Production QR registration and analytics boundaries all passed. The full retained Production regression chain, generated SEO, package creation/integrity, package-validation GitHub Pages deployment and last-known-good advancement passed. Two initial workflow attempts stopped on stale retained cache assertions; those assertions were corrected before release completion. Downloaded release ZIPs passed independent `unzip -t` integrity checks and SHA-256 matched the manifest.

Release records:
- Source/generated commit: `ef5f98396bb680944e392294cc7aa078d981c3be`
- Final package-validation / last-known-good commit: `826165b8457c15f837aab3a496792d60fee11436`
- Workflow run: `36503031004`
- Package-validation Pages run: `36503072570`
- Full ZIP: `Collect-TCG-Production-2026-09-29-v02-full.zip`
  - SHA-256: `2b2719a9752d7a17071b8ed1fd293aa87a9275a9bf806f8e48aa28d4fa76b622`
- Patch ZIP: `Collect-TCG-Production-2026-09-29-v01-to-2026-09-29-v02-patch.zip`
  - SHA-256: `fc08d51cf95e63b79a8fb4e75e9c0a54d815a77d552d487b92a63e012e48c896`

Validation limitation: interactive authenticated desktop/mobile/Safari browser testing was not performed; live Production was not manually opened to avoid contaminating Insights.

## Production 2026-09-29-v01

Previous Production: `2026-09-28-v05`

Development promoted from: `2026-09-28-v07`

Purpose: promote the validated Development v06-v07 eBay Listing Generator improvements.

Changes:
- Enlarges the eBay Description editor to 14 rows while Item Specifics remains at 8 rows and vertical resizing remains available.
- Adds a universal statement that only cards/items shown and described are included and that photos form part of the condition assessment.
- Notes that minor imperfections may not be fully visible because of lighting, reflections, camera angle or display differences.
- Raw listings state that condition is subjective and does not guarantee a PSA/BGS/CGC/other grading result.
- Graded listings state that the shown grade is assigned by the stated grading company and that the holder/slab may have minor handling marks that do not affect the assigned grade.
- Sealed listings state that outer packaging may have minor wear, dents, scratches, loose wrapping or other imperfections.
- Invites buyers to request additional condition information/close-ups before purchase and reminds them to verify the delivery address.
- Existing eBay title, item-specific, copy, image ZIP, card selection and Owner Mode behavior remain retained.
- Production-specific SEO/canonical behavior, QR Generator, analytics boundaries, owner/private-route protections and rollback safeguards remain retained.
- Development-only repository structure and `analytics_test` behavior remain excluded.

SQL required: No.

Validation status: completed successfully. Production repository structure, changed JavaScript syntax, imports/assets/references, the 14-row Description editor, executed raw/graded/sealed description-generation cases, retained eBay generator behavior, v05 Newly Added, private-route/privacy protections, generated SEO, Sold/currency/order regressions, package creation/integrity, final GitHub Pages deployment and rollback-anchor advancement all passed.

Release records:
- Source/generated commit: `7fe7ce3639ca223e4f2945c0d8aba5ccfa957c94`
- Final package-validation / last-known-good commit: `e77adad3e4ca43e3a2af4b543c996f056e45a855`
- Workflow run: `36441268992`
- Full ZIP: `Collect-TCG-Production-2026-09-29-v01-full.zip`
  - SHA-256: `c61acf3058121929bc883ef10152a67b95fcb6b6e20c4e279386541057eab9d0`
- Patch ZIP: `Collect-TCG-Production-2026-09-28-v05-to-2026-09-29-v01-patch.zip`
  - SHA-256: `9168cf194d7c71ac63f467339450cc20ab9e0b676eb5921b0298f1765b6922f8`

Validation limitation: interactive desktop/mobile/Safari browser testing was not performed; live Production was not manually opened to avoid contaminating Insights.

## Production 2026-09-28-v05

Previous Production: `2026-09-28-v04`

Development promoted from: `2026-09-28-v05`

Purpose: promote the validated Development v05 visible **Newly Added** inventory quick-filter pill immediately beside Trending.

Changes:
- Adds `Newly Added` directly after `Trending` in the Inventory/Collection quick-filter row.
- Reuses the existing `quick=new` behavior and existing seven-day `isNewCard(card, 7)` rule.
- Existing filters/search continue composing with the quick filter.
- Production-specific SEO/canonical behavior, QR Generator, analytics boundaries, owner/private-route protections and rollback safeguards remain retained.
- Development-only repository structure and `analytics_test` behavior remain excluded from Production.

SQL required: No.

Validation status: completed successfully. Production repository structure, changed JavaScript syntax, imports/assets/references, inventory filtering, dedicated Newly Added pill/order/URL behavior, generated SEO, v04 private-route privacy protections, retained v09 and 2026-09-28-v01-v03 behavior, package creation/integrity, final GitHub Pages deployment and rollback-anchor advancement all passed.

Release records:
- Source/generated commit: `d39274328b225c687a2d2c4263ab9b57442f6e20`
- Final package-validation / last-known-good commit: `bb1929c9db47f1b687131607edb7ce5e76e0cb62`
- Workflow run: `36394569205`
- Full ZIP: `Collect-TCG-Production-2026-09-28-v05-full.zip`
  - SHA-256: `1568d3310417c5d04ef53be44990afcb574b53600b7ae2adf7ba467635899631`
- Patch ZIP: `Collect-TCG-Production-2026-09-28-v04-to-2026-09-28-v05-patch.zip`
  - SHA-256: `c89317485dc8fb2c7f513195e516498272b1e21e506c6ce111d98f101655cf7a`

Validation limitation: interactive desktop/mobile/Safari browser testing was not performed; live Production was not manually opened to avoid contaminating Insights.

## Production 2026-09-28-v04

Previous Production: `2026-09-28-v03`

Development promoted from: `2026-09-28-v04`

Purpose: promote the validated Development v04 owner-only clean name-based routes for Hidden/Draft and Archived listings without making those listings public SEO content.

Changes:
- Public/live listings retain the existing full SEO generation, public `seo-slugs.json` and sitemap behavior.
- Hidden/Draft and Archived listings receive generic clean `/cards/<slug>/` route shells for authenticated Owner Mode.
- Private route shells contain only the card ID needed for Owner routing, use `noindex,nofollow,noarchive`, contain no card JSON-LD/Open Graph card metadata, and are excluded from the public sitemap and public slug map.
- Owner Mode lazily loads the separate `owner-card-routes.json` map only when needed for a non-live card.
- Buyer Preview/public users do not gain access to Hidden/Archived card data; existing Supabase RLS and router guards remain authoritative.
- Production-specific SEO/canonical behavior, QR Generator registration, analytics boundaries and rollback safeguards remain retained.
- Development-only repository structure and `analytics_test` behavior remain excluded from Production.

SQL required: Yes — `migrations/2026/2026-09-28-v04-PRIVATE-CARD-ROUTES.sql`. Rerunnable. User confirmed the shared Supabase migration was applied on 2026-09-28 before Production promotion.

Validation status: completed successfully. Production repository structure and rollback anchor, changed JavaScript syntax, imports/assets, discovery/routing/conversion behavior, buyer/privacy/Hidden Listings guards, SEO generation, dedicated v04 private clean-route privacy checks, retained v05-v09 and 2026-09-28-v01-v03 behavior, package creation/integrity, final GitHub Pages deployment and rollback-anchor advancement all passed. The dedicated private-route check verified every generated owner route is absent from the public SEO map and sitemap, has a static shell, carries `noindex,nofollow,noarchive`, contains its routing card ID, and contains no JSON-LD or Open Graph image metadata.

Release records:
- Source/generated commit: `efcedbb52da3d23ba9bd152611ee4b8b9754ced8`
- Final package-validation / last-known-good commit: `c4c3b1373d4643a961e5b7d1cd7116a36eba28dc`
- Workflow run: `36387002355`
- Full ZIP: `Collect-TCG-Production-2026-09-28-v04-full.zip`
  - SHA-256: `f8e30536a5e60e5d8c35091fa0ee9253450102196a8b9f14e69e34b736ec5d4b`
- Patch ZIP: `Collect-TCG-Production-2026-09-28-v03-to-2026-09-28-v04-patch.zip`
  - SHA-256: `65d0bbbf42cd2b7d1a05bd83a9ccf9c72f3470ad90c63997e1ff91c10724b8db`

Validation limitation: interactive desktop/mobile/Safari browser testing was not performed; live Production was not manually opened to avoid contaminating Insights.

## Production 2026-09-28-v03

Previous Production: `2026-09-28-v02`

Development promoted from: `2026-09-28-v03`

Purpose: promote the validated Development v03 Edit-price fix so deliberately saved USD/SGD listing prices are preserved when reopening the Owner Add/Edit/Clone form.

Changes:
- Existing non-empty saved USD and SGD values are treated as manual when currency wiring initializes, preventing the current MYR FX rate from overwriting them on form open.
- Changing MYR still intentionally clears the manual state and recalculates USD and SGD from the loaded FX rate.
- Pressing `Refresh rate` still intentionally recalculates USD and SGD.
- Save/storage behavior is unchanged.
- Production QR Generator registration, SEO/canonical behavior, analytics boundaries, v02 Sold behavior and rollback safeguards remain retained.
- Development-only `analytics_test` behavior remains excluded from Production.

SQL required: No.

Validation status: completed successfully. Production repository structure and rollback anchor, changed JavaScript syntax, imports/assets, routing/discovery/conversion behavior, Owner/privacy/Hidden Listings guards, retained v05-v09, v01 and v02 behavior, the dedicated saved manual USD/SGD regression scenario, SEO generation, full/patch ZIP integrity, final GitHub Pages deployment and rollback-anchor advancement all passed.

Dedicated currency scenario exercised:
- Open Edit with MYR 1000, saved USD 333 and saved SGD 444: loading the FX rate preserves USD 333 / SGD 444.
- Change MYR to 2000: automatic conversion resumes and updates the test values to USD 500 / SGD 600.

Release records:
- Source commit: `27a148fdd5ba221631b7b15eeffeabbc8c75a11b`
- Final package-validation / last-known-good commit: `56a4ee2fcae7e72a73f16a36994ac005f719bd97`
- Workflow run: `36376063768`
- Full ZIP: `Collect-TCG-Production-2026-09-28-v03-full.zip`
  - SHA-256: `c4e42738d5a9782165dee4d729eeb74a816dd5c4c9c39ec397dae03bcdae35a0`
- Patch ZIP: `Collect-TCG-Production-2026-09-28-v02-to-2026-09-28-v03-patch.zip`
  - SHA-256: `6efea2812a20a88a9a01ca8f429f11edcd8e46be879748cc28de56ed3e09ad11`

Validation limitation: interactive desktop/mobile/Safari browser testing was not performed; live Production was not manually opened to avoid contaminating Insights.

## Production 2026-09-28-v02

Previous Production: `2026-09-28-v01`

Development promoted from: `2026-09-28-v02` (cumulative Development v01-v02 behavior)

Purpose: promote the validated Sold-page Owner menu placement and buyer/public sold-date ordering fixes while preserving Production-specific SEO, QR Generator, analytics and rollback behavior.

Changes:
- Desktop Owner Mode Sold/Reserved cards keep the `...` quick-action menu in the standard top-right corner; the grade/condition overlay moves below it only in Owner Mode.
- Public Sold/Reserved card presentation remains unchanged by the owner-menu fix.
- Buyer/public Sold ordering uses a privacy-safe chronological Sold rank so `Recently Sold` matches Owner Mode's true `sold_at` chronology without exposing the private timestamp.
- Existing timestamp fallbacks remain available if the Sold-rank RPC is unavailable.
- Production QR Generator registration, SEO/canonical behavior, analytics boundaries and rollback safeguards remain Production-specific.
- Development-only `analytics_test` behavior remains excluded from Production.

SQL required: Yes — `migrations/2026/2026-09-28-v02-PUBLIC-SOLD-ORDER.sql`. Rerunnable. User confirmed the equivalent v02 migration was applied to the shared Supabase environment on 2026-09-28.

Validation status: completed successfully. Production repository structure and rollback anchor, changed JavaScript syntax, imports/assets, routing/discovery/conversion behavior, Owner/privacy/Hidden Listings guards, retained v05-v09 and v01 behavior, the v02 Sold owner-menu/public Sold-order contract, SEO generation, full/patch ZIP integrity, final GitHub Pages deployment and rollback-anchor advancement all passed.

Release records:
- Source commit: `9a23e61573b5d3323dce0067de25b6ae639d5c31`
- Final package-validation / last-known-good commit: `782edb135e31d867fe0abe73bbe4a7a3a582089b`
- Full ZIP: `Collect-TCG-Production-2026-09-28-v02-full.zip`
  - SHA-256: `15f68bd228007d333922b73436fcabdb3a45e68a5105e415ae8291acc8cfb199`
- Patch ZIP: `Collect-TCG-Production-2026-09-28-v01-to-2026-09-28-v02-patch.zip`
  - SHA-256: `685fcd4a9b7becfedcbd443a79e721b889815f60b6ac187196895409e7317a28`

Validation limitations:
- SQL application is user-confirmed; the live public RPC response and rendered Production Buyer Preview ordering were not manually exercised.
- Interactive desktop/mobile/Safari browser testing was not performed; live Production was not manually opened to avoid contaminating Insights.

## Production 2026-09-28-v01

Previous Production: `2026-09-27-v09`

Development promoted from: `2026-09-27-v28`

Purpose: promote the validated Development v28 game-aware new-card Inventory insertion fix while preserving Production-specific SEO, rollback, QR Generator and analytics behavior.

Changes:
- Newly added Inventory cards are inserted inside their own exact `game` category instead of one global graded/raw/sealed bucket across all games.
- Within that game/category, new-card placement is: Graded first with highest numeric grade first, then Raw M → NM → LP → MP → HP → DMG → N/A, then Sealed.
- Existing cards retain their relative Custom Order; this release does not globally rearrange existing Inventory cards.
- Brand-new game/categories use the saved Inventory game-group order where available.
- Production QR Generator registration, SEO/canonical URLs, analytics behavior and rollback safeguards remain Production-specific.
- Development-only `analytics_test` behavior remains excluded from Production.

SQL required: No.

Validation status: completed successfully after correcting one stale workflow cache assertion. Production repository structure and rollback anchor, changed JavaScript syntax, imports/assets, routing/discovery/conversion behavior, Owner/privacy/Hidden Listings guards, retained v05-v09 behavior, game-aware new-card insertion scenarios, SEO generation, full/patch ZIP integrity, final GitHub Pages deployment and rollback-anchor advancement all passed.

Release records:
- Source commit: `dbce984ba2aa8aa2eabc07a1f75246c4ba6844f2`
- Final package-validation / last-known-good commit: `debec515c5d01bda15d4987f5c8e2a9ef331bfca`
- Full ZIP: `Collect-TCG-Production-2026-09-28-v01-full.zip`
  - SHA-256: `dfc5f1fed8df683f1c2aa9ac0b73381e1da346a8f3a355b12a3d089fdff1f9a0`
- Patch ZIP: `Collect-TCG-Production-2026-09-27-v09-to-2026-09-28-v01-patch.zip`
  - SHA-256: `83c5e43f244ddf5cc56b93cdb1d6569304dfed07d021ecf91022dfd48696bb64`

Validation limitation: interactive desktop/mobile/Safari browser testing was not performed; Production was not manually opened for live testing to avoid contaminating Insights.

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
