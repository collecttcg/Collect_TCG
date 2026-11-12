# Collect TCG Current Baseline

Last reconciled against GitHub: 2026-11-12

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

## Current reconciled state — 2026-11-12

### Pre-errata/error card title checkbox — Production 2026-11-12-v06
- Previous Production: `2026-11-12-v05`; promoted from validated Development `2026-11-12-v07` (source `aa545e2de5c5398f2afdc70ab04e36457fc1bcd1`).
- Owner Add, Edit and Clone card forms expose a Pre-errata / error card checkbox under Card Name. Toggling it immediately adds/removes the exact `[PRE ERRATA] [ERROR]` prefix in the name input; saving persists it as part of the existing `name` field, without a DB schema change. Reopening an existing prefixed title restores checked state.
- Production changed `src/features/owner/forms.js`, `src/features/owner/add.js`, `src/app/register-features.js`, release workflow. No SQL required. No unrelated Dev-only features promoted.
- Production release manifest `release-manifests/2026-11-12-v06.txt`; full ZIP SHA-256 `792afcd8695477e154473f2ac5e233a75088b76499b32ec3bd71203b64951329`; patch ZIP SHA-256 `79af26c9675f112edde2cafc272f6587749448ba39bf2ef0cf56bc610ed97fb3`.
- Development Release workflow `43185641589` succeeded; Production Release workflow `43186493423` passed checks and packaging but failed final Pages monitoring because its initial deployment was canceled by the manifest commit. Independent Pages deployment for manifest commit `e1047a76f9c6570bf9b6e2f8cd16b3431f2df355` succeeded in workflow `43186549046`; `production-last-known-good` updated to that manifest commit with expected-SHA guard.
- Validation limitations: no interactive authenticated Owner, desktop/mobile, or Safari browser testing; no manual live Production opening to avoid Insights contamination.

### Refined eBay negotiation wording — Production 2026-11-12-v05
- Previous Production: `2026-11-12-v04`; Development promoted from `2026-11-12-v04` (source `c5ba5e2b0f5e7dea8e1fc46d787eaf3e7e91bcc1`).
- Updated the Owner eBay Listing Generator `[NEGOTIATION]` wording to welcome reasonable offers, ask buyers to provide their offer first rather than requesting the seller's best price, review offers, arrange agreed-price purchases through eBay where supported, and respectfully decline unacceptable offers. Existing listing sections retained.
- Dev manifest: `release-manifests/2026-11-12-v04.txt`; Production manifest: `release-manifests/2026-11-12-v05.txt`. SQL: none.
- Production full ZIP SHA-256: `8cd69756772eb5eba3cbb82059b24dac34bb71b8effa4a5a0c981316ea6c2f0d`; patch ZIP SHA-256: `a1d7401ebe56b8ec09565d37cb5b632516a71c15ef5b602df25f61eeeba8dbb2`.
- Dev release validation and packaging succeeded; Production syntax, retained contracts, SEO and package integrity passed. Production Release workflow `43178384213` failed at final Pages-monitoring stage because the source Pages run was canceled by the manifest commit. Independent manifest-commit Pages deployment `43178434147` was pending at initial reconciliation. No interactive desktop/mobile/Safari or authenticated Owner browser testing.

### eBay listing negotiation guidance — Production 2026-11-12-v04
- Previous Production: `2026-11-12-v03`. Development promoted from: `2026-11-12-v03` (source `e63c8848667e567eb623036684ed372a8a026462`).
- The eBay Listing Generator now inserts `[NEGOTIATION]` after `[ITEM DETAILS]` and before `[SHIPPING]`, with the text: "Please do not ask for our best price. If you would like to negotiate, please state your best offer first." Existing shipping, import duties, and Collect TCG footer content are retained.
- Production files: `src/features/social/posts-marketplace.js`, `src/features/social/posts.js`, `src/app/register-features.js`, `.github/workflows/release-production.yml`. No SQL.
- Production manifest: `release-manifests/2026-11-12-v04.txt`. Full ZIP `Collect-TCG-Production-2026-11-12-v04-full.zip` SHA-256 `39ede7165569926415f9d85966c744248819b3044767017cf4c803d86a2ff672`. Patch ZIP `Collect-TCG-Production-2026-11-12-v03-to-2026-11-12-v04-patch.zip` SHA-256 `1b250d5a9fbdf369066db8eb5375cc020eccbbaa294a00994e259a8571b2049f`.
- Development Release workflow `43177759134` succeeded. Production Release workflow `43177897900` passed syntax, retained contracts, SEO, and package integrity, but its final deployment-monitoring step failed after the source Pages run was canceled by the manifest commit. Independent Pages deployment for the manifest commit succeeded in run `43177963743`; `production-last-known-good` was advanced to manifest commit `b913c07a50f2396752ab4eb64cb8932e21e34ccb` with an expected-SHA guard.
- Validation limitations: no authenticated Owner browser testing, desktop/mobile/Safari browser testing, or manual Production live opening to avoid Insights contamination.

### eBay Ban List blocked-buyer shortcuts — Production 2026-11-12-v03
- Previous Production: `2026-11-12-v02`. Development promoted from: `2026-11-12-v02` (source `a78552d408f95f8155dc920bc98a749b51d63ead`).
- All five owner-only eBay Ban List account tiles now link to `https://www.ebay.com/bmgt/BuyerBlock` and say "Manage Blocked Buyers". eBay determines the displayed blocked-buyer list from the signed-in eBay account; users must switch accounts manually. Existing shared Supabase ban list and RLS were not modified. No SQL.
- Production files: `src/features/owner/ebay-banlist.js`, `src/app/register-features.js`, `.github/workflows/release-production.yml`.
- Production manifest: `release-manifests/2026-11-12-v03.txt`. Full ZIP `Collect-TCG-Production-2026-11-12-v03-full.zip` SHA-256 `b3b3c90db915d2db572b436818f06a551538f3f095a844af8daaf2079fc7e4a6`. Patch ZIP `Collect-TCG-Production-2026-11-12-v02-to-2026-11-12-v03-patch.zip` SHA-256 `d5e7e027575bcdf82f2e1903099ec77e5684bacca559016a96dbe27cbfc9c6c0`.
- Production Release workflow `43140531651` passed code/retained-contract/SEO/package checks and committed manifest, but its final automatic deployment check failed because it monitored the original workflow source commit whose Pages run was canceled when the manifest commit was pushed. The **manifest commit** Pages run `43140576433` subsequently succeeded. Rollback branch `production-last-known-good` was separately advanced to `db74b646e6fb18c1dee52ed0a519678c8074bcdb` using verified ref update. The automatic release workflow remains marked failed; the independent deployment and rollback evidence is recorded here.
- Validation limitations: no interactive authenticated Owner browser test, desktop/mobile/Safari test, or live Production open.

### Hidden Listings Production promotion — 2026-11-12-v02
- Previous Production: `2026-11-12-v01`. Approved Development source: `2026-11-12-v01` (`77793b6a073f45d9b46dd6513b50cc8489f01cf6`); promoted only the owner-only Hidden Listings shared Inventory interface.
- Hidden Listings now reuses Browse the Vault game tiles, search, filters, sorting, and pagination. Production's existing private Card Owner category filter was adapted to the shared workspace instead of being removed.
- Owner-only routing and `requireOwner` remain; hidden scope filters only draft lifecycle records; normal catalogue scopes continue to exclude drafts and archives. No SQL required.
- Production release manifest: `release-manifests/2026-11-12-v02.txt`. Full ZIP `Collect-TCG-Production-2026-11-12-v02-full.zip` SHA-256 `0d2285d8e34170032e3c014c069ee6e23dfeb536306c47f4ffaafae684400ffa`. Patch ZIP `Collect-TCG-Production-2026-11-12-v01-to-2026-11-12-v02-patch.zip` SHA-256 `b0ba3b2ccf31cbd8697a90aeac9d1e1f5975e7a98c6cadec342a7f26de31f071`.
- Production Release workflow `43134853427` passed JavaScript syntax, retained contracts, Hidden Listings contracts, SEO, and package integrity. GitHub Pages deployment `43134906950` succeeded for source `971bd8de3e128cb4874d65eb651fb86a9b29cade`. Rollback branch `production-last-known-good` was advanced to manifest commit `58b3debf21a80dd5eb2b2ee36e10f62fc428ab07` via verified ref update.
- The release workflow's final automatic deployment check was still waiting for a Pages run on the manifest commit, while the actual source commit Pages deployment succeeded. Treat workflow terminal status separately from independently confirmed Pages success.
- Validation limitations: no authenticated interactive Owner test, desktop/mobile/Safari browser test, or live Production opening.

### Previous Production promotion — 2026-11-12-v01
- Previous Production: `2026-11-10-v03`. Approved Development source: `2026-11-12-v01` (source `77793b6a073f45d9b46dd6513b50cc8489f01cf6`), with **only the Collect TCG 2 eBay URL correction** promoted.
- The active Production Contact, Owner eBay Ban List, and Card List Post Generator references to `COLLECT_TCG_2` now use `https://www.ebay.com/str/collecttcg2` instead of the UK storefront URL.
- Production files: `src/features/content/information.js`, `src/features/owner/ebay-banlist.js`, `src/features/social/posts-card-list.js`; release workflow `.github/workflows/release-production.yml`. Other Development-only changes, including the Hidden Listings shared Inventory workspace, were not promoted.
- SQL required: No. No database migration or backend change.
- Production release manifest: `release-manifests/2026-11-12-v01.txt`. Full package: `Collect-TCG-Production-2026-11-12-v01-full.zip` (SHA-256 `143c0b6579dd014e9af4eee8f38747aefcbafacc41941a6150d2d27ba2dab2e1`). Patch package: `Collect-TCG-Production-2026-11-10-v03-to-2026-11-12-v01-patch.zip` (SHA-256 `dd18b578bed5c73ba6141dd64f67707be6b0a708d1279e5a6e5df031c3e5bb1a`).
- Production Release workflow `43134003196` succeeded: Production JavaScript syntax, retained contracts, SEO regeneration, package integrity, GitHub Pages deployment, and advancement of `production-last-known-good`. Final Pages run `43134048295` succeeded.
- Validation limitations: Production was not manually opened to avoid Insights contamination; interactive desktop/mobile/Safari browser testing and authenticated Owner interaction were not performed.

### Latest Development release — 2026-11-12-v01
- Previous packaged Development release: `2026-11-10-v05`.
- Includes Development Hidden Listings shared Inventory workspace and the Collect TCG 2 eBay URL correction. Full and patch ZIPs were created, integrity-checked, uploaded, and recorded in `release-manifests/2026-11-12-v01.txt`; Development Release workflow `43133733570` succeeded.
- Development-only behavior remains excluded from Production unless separately approved.

## Historical reconciled state — 2026-11-10

### Latest Production promotion — 2026-11-10-v03
- Production 2026-11-10-v03 (previous accepted Production 2026-11-10-v02) promotes validated Development 2026-11-10-v05 (source c45f417c114c04bc87bfbcd5fc8e7a63e58cb25a).
- Changes: desktop Card Details **More** now includes **Download all listing images**. It creates a ZIP containing listing photos only, without the Inventory QR. Existing single-image downloads, eBay-generator ZIP behavior, and sold/reserved watermark behavior are retained.
- Production source c3ca934a6dcd5fb1e8ced00d42bb03f0ad1f2f23; immutable manifest release-manifests/2026-11-10-v03.txt recorded at f34534a03d61cbf5c063c9d36fb55a2c016b30cd.
- Full ZIP Collect-TCG-Production-2026-11-10-v03-full.zip SHA256 e737dd3dd46f4509a59af73096649c2098ec5fd308a52ee2b4ccaf81099e2ca8.
- Patch ZIP Collect-TCG-Production-2026-11-10-v02-to-2026-11-10-v03-patch.zip SHA256 ece1413051b1cea98da75990ae9fee45017ce92b8dbefaef2eb409d7667643a2.
- Production Release workflow 42832447033 passed all application validation and package gates but timed out waiting for GitHub Pages, which canceled that deployment. A behavior-neutral Pages retry commit 0fa0b7f67facb17d46e69e6502749412d3d7f35c deployed successfully through Pages workflow 42834550533; production-last-known-good advanced to that deployed commit.
- SQL/database/RLS/Edge Function change required: No. Production-specific QR Generator, Production scanner endpoint, analytics/privacy boundaries, and Owner authorization protections were retained.
- Validation limitations: Production was not manually opened; interactive desktop/mobile/Safari browser testing was not performed.

### Latest Production promotion — 2026-11-10-v02
- Production `2026-11-10-v02` (previous accepted Production `2026-11-07-v01`) promotes validated Development `2026-11-10-v04` (source `2777969a4476c95cae58ef41c7bbca2d6a1d77c9`).
- Changes: the Owner eBay After Purchase template includes weekend dispatch timing; available cards with a valid saved HTTPS eBay listing URL now show **View on eBay ↗** next to **Contact to Buy**. On mobile, the paired actions are equal, compact 78px controls. Cards without a valid eBay listing retain the established contact-only path.
- Production source `2fd0920b3e594aa6954370e8cbc2107061b52ef2`; immutable manifest `release-manifests/2026-11-10-v02.txt` recorded at `f18846cd8aa3d118e98eaed2d0d671eadf424438`.
- Full ZIP `Collect-TCG-Production-2026-11-10-v02-full.zip` SHA256 `c172916500e59992fe32aa1746370aa0767be9da9e58e0f56b2837cf9e8cc1cc`.
- Patch ZIP `Collect-TCG-Production-2026-11-07-v01-to-2026-11-10-v02-patch.zip` SHA256 `b1436b60c2758e4ff67a5356e689621a6b22f067729399970550b64446a3d727`.
- Production Release workflow `42818203155` passed rollback-anchor, Production syntax, retained and direct-eBay/mobile contracts, SEO validation/regeneration, package integrity, and final Pages deployment. GitHub Pages workflow `42818269347` deployed successfully; `production-last-known-good` advanced to `f18846cd8aa3d118e98eaed2d0d671eadf424438`.
- SQL/database/RLS/Edge Function change required: No. Production-specific QR Generator, scanner endpoint, analytics/privacy boundaries, and Owner authorization protections were retained.
- Validation limitations: Production was not manually opened; interactive desktop/mobile/Safari testing was not performed.

### Incomplete Production promotion — 2026-11-10-v01 (not accepted)
- The Owner eBay After Purchase message source was updated to say: “It will be shipped over the weekend.” Production cache registration was refreshed, and the Production release workflow was hardened against concurrent SEO-refresh push races.
- Immutable manifest `release-manifests/2026-11-10-v01.txt` was recorded at `d10a2ee9e805e23a4f5d62bfc9303763731df009`, with Development source `aba745c2aa04ca7088f1f8a26f79ad65d5c4fb25`. Full ZIP SHA256 `d27dc1c79b83c05fc13d65e2da1c92957aa832b60c152f193bec6ce46fc8049a`; patch ZIP SHA256 `a90f3cdb3f6f796f6ee97b1727d0bf70847d3c36e84d0a5666f059e5aca7d941`.
- Production Release workflow `42803886315` passed source, retained-contract, syntax, SEO, and package validation, but failed its final Pages-deployment wait. GitHub Pages run `42803941060` subsequently completed with `failure`.
- This is **not** an accepted Production release. At that time, `production-last-known-good` remained at `80173ca41ee693d1773e1936c7ee6154a0915c7f` (Production `2026-11-07-v01`); it was later superseded by the successful v02 release below.
- SQL/RLS/Edge Functions: none. No live Production opening or interactive desktop/mobile/Safari testing was performed.

### Latest Production promotion — 2026-11-07-v01
- Production `2026-11-07-v01` (previous `2026-11-05-v02`) promoted the validated Development `2026-11-07-v01` Insights country attribution change (Development source `89d2bc6c17a9cfbba62de3812201328880706baf`).
- Production package source `7bb88c0f80b78f997c98c8f0ab29389d681fba31`; immutable manifest `release-manifests/2026-11-07-v01.txt` recorded at `80173ca41ee693d1773e1936c7ee6154a0915c7f`.
- Full ZIP `Collect-TCG-Production-2026-11-07-v01-full.zip` SHA256 `1a1ec8e2baaff8ab1a718d1b8b8459039eb8456f07e38a7c5fe0c50b57c91160`.
- Patch ZIP `Collect-TCG-Production-2026-11-05-v02-to-2026-11-07-v01-patch.zip` SHA256 `23d5ef519a3b38f4e5c818b8b13f44b20d6afe59a581ccea65ab33604cf7e865`.
- Production Release workflow `42379610182` succeeded, including rollback anchor, all Production JavaScript syntax, retained contracts, Insights country attribution, SEO, package integrity, and successful Pages deployment `42379642635`. Workflow advances the last-known-good rollback branch after Pages success.
- Scope: Owner Insights Recently Viewed Cards country labels using existing country analytics; Insights module cache refreshed. No SQL, RLS or Edge Function changes. Production-specific QR Generator, scanner, public behavior and analytics boundaries retained.
- Limitations: no live Production opening; interactive desktop/mobile/Safari browser testing not performed.

### Previous validated releases (2026-11-05-v01)
- Development: `2026-11-05-v01`; previous `2026-11-03-v02`; manifest `release-manifests/2026-11-05-v01.txt`; package source `9f8312141068c2e7f33b85b8b341863255ff71ae`.
- Development full ZIP: `Collect-TCG-Dev-2026-11-05-v01-full.zip` (SHA256 `6d00cb3c09bf04efea15d45a705b807ed07f6a8c75e7b2de4c2ecc3971dafe24`).
- Development patch ZIP: `Collect-TCG-Dev-2026-11-03-v02-to-2026-11-05-v01-patch.zip` (SHA256 `f1c31d9090c662e3e1b5f60742c4e912a0ceaba025b71cc238662a413b694eec`).
- Production: `2026-11-05-v01`; previous `2026-11-03-v02`; manifest `release-manifests/2026-11-05-v01.txt`; package source `838e0fcdba04101c2dca4558d21de722c6a6b4e6`; manifest/rollback commit `d7696ef2988ffd41bc6a20e1345ff46736fc7aeb`.
- Production full ZIP: `Collect-TCG-Production-2026-11-05-v01-full.zip` (SHA256 `37849152060388021a885d2530225edc316cc6a2ae8f83c6855f8540cc1b65ad`).
- Production patch ZIP: `Collect-TCG-Production-2026-11-03-v02-to-2026-11-05-v01-patch.zip` (SHA256 `20e1b0d970ad47a9b67b958f22cc18cd8914bdcc4668a2cf51bec17f02b4b878`).
- Development v01 release validation, packages, immutable manifest and GitHub Pages deployment succeeded. Development SEO refresh also succeeded after updating the baseline checker and legacy analytics cache-version assertions.
- Production v01 independently passed the Production release workflow; packages and immutable manifest were recorded; GitHub Pages deployment succeeded; `production-last-known-good` advanced to `d7696ef2988ffd41bc6a20e1345ff46736fc7aeb`.
- No new SQL/Edge Function/RLS migration was required. Interactive desktop/mobile/Safari browser testing and live Production opening were not performed.

### Promoted Development changes
- Facebook single-card posts include an optional saved eBay listing URL after the Collect TCG card URL.
- Sale conversion snapshots resolve the actual card creation date from the database when omitted from the local card object. Unknown dates are recorded as unknown rather than inventing a January 2000 listing date.
- SEO card titles now include game and series to distinguish similarly named cards.
- Preserve Production-specific QR Generator, scanner endpoint, analytics/privacy boundaries and stable SEO URLs. Keep Development analytics-test exclusions out of Production.
- Development's `tools/check.mjs` and `tools/release-contracts.sh` were corrected to match the current baseline format and analytics cache version; Production's `tools/check-production.mjs` baseline validation was updated accordingly.
- All prior `2026-11-03-v02` release history remains immutable.

### Shared Supabase data correction
- On 2026-11-04, the existing sale snapshot `card_sale_snapshots.id=43` for LUFFY (`card_id=c21edd25-757c-4f5c-aa5f-0e909c3e0ca4`) was explicitly approved and updated from `days_listed=9803` to `34` in the shared database; readback confirmed 47 snapshots, average 10 days, and no snapshots over 1000 days. This data fix affects both environments and does not imply a Production frontend deployment.

### Latest validated releases — 2026-11-05-v02
- Development `2026-11-05-v02` (previous `2026-11-05-v01`), manifest `release-manifests/2026-11-05-v02.txt`, source `c45f6ae7ea4815aae1e3bc4c4c7078d54b92fd1d`. Development Release workflow 42034890411 succeeded, including JavaScript syntax, regression and eBay-footer checks, SEO, repository/CSS validation, full/patch package integrity. Development Pages deployment 42034939622 succeeded.
- Development full ZIP `Collect-TCG-Dev-2026-11-05-v02-full.zip` SHA256 `f3ce34887b14ffbc1f2db1e173c46dae9f81404d8cf5e4473b55675fe549a3cb`; patch ZIP `Collect-TCG-Dev-2026-11-05-v01-to-2026-11-05-v02-patch.zip` SHA256 `6d401a0eeaaa7678750de5ae2ff85c3a2c185548186446e1ed0ac64c139293b1`.
- Production `2026-11-05-v02` (previous `2026-11-05-v01`), promoted from Development `2026-11-05-v02`, manifest `release-manifests/2026-11-05-v02.txt`, package source `698ef031a53425d55a4c278c92736f6a7a0775be`, manifest/rollback commit `d0d90b1bdbc9a117a49749680aa5e2c3be974555`. Production Release workflow 42035576367 succeeded after correction of two stale retained-module cache checks; Production Pages deployment 42035628327 succeeded and rollback anchor was advanced.
- Production full ZIP `Collect-TCG-Production-2026-11-05-v02-full.zip` SHA256 `499590cb45084667e9a10f0572500bc506ac4821b5438fb5bd3b15f217cce441`; patch ZIP `Collect-TCG-Production-2026-11-05-v01-to-2026-11-05-v02-patch.zip` SHA256 `399ca43693702f5307862147107ca2ab5c309c73d925ee598a09122a66180383`.
- Both Full Card List and Short Drop Facebook posts include exactly one footer listing the five official eBay accounts from the Contact page. Removed the phrase about viewing seller history and feedback. Only `posts-card-list.js`, its cache import in `posts.js`, and release workflow files were changed for the promotion; Production-specific modules remain retained.
- SQL required: No. Validation limitations: interactive desktop/mobile/Safari browser tests not performed; live Production not opened to avoid analytics contamination.

## Historical Development release record (2026-11-03-v01)
Development release at time of this record: `2026-11-03-v01`
Previous Development: `2026-11-02-v03`
Development release manifest: `release-manifests/2026-11-03-v01.txt`
Development v01 package source commit: `8d7a606445ce485a484235136902efdc4a0d7147`
Development v01 manifest commit: `e1eb3109a8eab4fade3293214c375649adb38d1b`

### Development package record — 2026-11-03-v01
- Full ZIP: `Collect-TCG-Dev-2026-11-03-v01-full.zip`
- Full SHA256: `f9fcde33367e3183e7abf1e8515e1050a9a14a1ad19eb28a49f5a5b9cd659867`
- Patch ZIP: `Collect-TCG-Dev-2026-11-02-v03-to-2026-11-03-v01-patch.zip`
- Patch SHA256: `728a8e4fb80cdfdadc702e0fb64ee8d187cd959e0e76c7e1b69a8382e6024e2e`

Current Development behavior:
- Owner Inventory Tools has a dedicated `eBay` category consolidating `eBay Messages`, `eBay Ban List`, and `eBay Listing Status`.
- eBay Messages contains separate `After Purchase` and `After Shipped` templates. The After Shipped template asks a satisfied buyer to leave positive feedback for the store.
- The legacy Buyer Messages Activity link is removed from the rendered Inventory Tools navigation by the consolidated eBay tools module.
- The existing eBay Ban List remains Owner-only and Supabase/RLS protected; its old route redirects into `Inventory Tools > eBay > eBay Ban List`.
- Existing Listed on eBay status, optional eBay URL, public On eBay badge and Owner `On eBay only` inventory filter remain retained.
- MYR below RM400 continues current-rate USD/SGD conversion rounded to the nearest whole amount; RM400+ retains the established upward pricing rule.
- Development SEO refresh remains release-agnostic, was regenerated/validated for this release, and retains `noindex,nofollow,noarchive`.
- Owner-only AI Card Scanner, QR Generator, generators, private analytics and established Owner Inventory Tools remain retained.
- SQL/schema/RLS/Edge Function change required by `2026-11-03-v01`: No.

Development v01 validation completed:
- feature regression tests passed;
- all Development JavaScript syntax checks passed;
- eBay tools/messages/ban-list/listing-status contracts passed;
- retained FX and HEIC contracts passed;
- repository/CSS/release contracts passed;
- SEO self-test, generation and output validation passed;
- full/patch ZIPs created and integrity-checked;
- immutable manifest/checksums recorded.

Development validation limitations:
- Interactive desktop/mobile/Safari browser testing was not performed for v01.

## Historical Production release record (2026-11-03-v01)
Production release at time of this record: `2026-11-03-v01`
Previous Production: `2026-11-02-v03`
Development promoted from: `2026-11-03-v01` source `8d7a606445ce485a484235136902efdc4a0d7147`
Production release manifest: `release-manifests/2026-11-03-v01.txt`
Production v01 package source commit: `d5b23f2448bf4b8af35d8bff9d58099fe9531b9a`
Production v01 manifest commit / validated rollback anchor: `c907d0c685ef0e0b6f3b36d82dc997855c44c0ba`

### Production package record — 2026-11-03-v01
- Full ZIP: `Collect-TCG-Production-2026-11-03-v01-full.zip`
- Full SHA256: `97f2c93f24aad47f67943fb85f6ad7069bbb4f03c1804a506aa9214b29ad9636`
- Patch ZIP: `Collect-TCG-Production-2026-11-02-v03-to-2026-11-03-v01-patch.zip`
- Patch SHA256: `272ffed4f7800cc198028d902a954c0dd3def361e8878a20c6a863eb391bcf08`

### Production 2026-11-03-v01
Purpose: consolidate Owner eBay tools under Inventory Tools > eBay, add a separate After Shipped feedback message, and refresh Production SEO output.

Current Production behavior:
- Owner Inventory Tools now exposes a dedicated `eBay` category with `eBay Messages`, `eBay Ban List`, and `eBay Listing Status`.
- eBay Messages contains separate After Purchase and After Shipped copyable templates; After Shipped asks satisfied buyers for positive store feedback.
- eBay Ban List remains Owner-only and protected by existing Supabase RLS; the former standalone route redirects into the consolidated eBay tools area.
- Existing eBay listing-status controls and public On eBay behavior are retained.
- Production-specific QR Generator, scanner endpoint, analytics/privacy boundaries, generators, Contact to Buy, giveaways and stable public URLs remain retained.
- Production SEO was regenerated and validated with index/follow card metadata, sitemap/robots checks and UUID exclusion.
- Below RM400 FX whole-number conversion and RM400+ upward pricing behavior remain unchanged.
- SQL/database/RLS/Edge Function change required by v01: No.

Production v01 validation completed:
- rollback anchor validated;
- all Production JavaScript syntax checks passed;
- Production/retained and consolidated eBay tools contracts passed;
- SEO workflow guard, SEO self-test, regeneration and output validation passed;
- full/patch ZIPs created and integrity-checked;
- immutable `2026-11-03-v01` manifest/checksums recorded;
- GitHub Pages deployment for the release manifest commit completed successfully;
- `production-last-known-good` advanced to `c907d0c685ef0e0b6f3b36d82dc997855c44c0ba` after Pages success.

Production validation limitations:
- Live Production was not manually opened to avoid contaminating Insights.
- Interactive desktop/mobile/Safari browser testing was not performed.

## Historical immutable state retained
- Production `2026-11-02-v03` / Development `2026-11-02-v03` remain immutable and introduced whole-number current-rate FX conversion below RM400.
- Production `2026-11-02-v02` / Development `2026-11-02-v02` remain immutable and introduced normal current-rate FX conversion below RM400 with two-decimal output before v03 changed that low-price output to whole numbers.
- Production `2026-11-02-v01` remains immutable and contains the validated eBay import-duty refusal notice and Buyer Message `Collect TCG` signature promotion.
- Development `2026-11-02-v01` remains immutable as an earlier Development release.
- Production `2026-11-01-v03` remains immutable and contains the release-agnostic SEO/release infrastructure update.
- Production `2026-11-01-v02` remains immutable and contains earlier Buyer Messages/eBay generator messaging promotion.
- Production `2026-11-01-v01` / Development `2026-11-01-v01` remain immutable prior releases containing eBay listing-status and quick-action viewport preservation.
- Production `2026-10-31-v02` / Development `2026-10-31-v02` remain immutable prior releases containing Inventory sorting and responsive toolbar improvements.
- Production `2026-10-31-v01` / Development `2026-10-31-v01` remain immutable prior releases containing Owner image workflow and PSA POP improvements.
- Production `2026-10-30-v04` / Development `2026-10-30-v06` remain immutable prior releases and retain the modern HEIC decoder path.
- Production `2026-10-25-v03` added the Owner eBay Ban List and `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`, applied and verified on Supabase project `cbzytysxtdcqxuckspye`.

## Canonical retained behavior
Preserve public card pages/SEO/stable URLs/SPA history; Related Cards/Trending/discovery attribution; Inventory/Collection/Sold/Reserved/Favorites; Inventory sorting and custom ordering; Owner Mode and Owner-only tools; JPEG/PNG/WebP/HEIC/HEIF listing photos; compact Owner Inventory Tools; Owner categories/Unassigned Owners; inventory value; eBay Messages; private analytics/Buyer Preview; Owner-only AI Card Scanner; eBay Ban List and listing status; QR Generator; Post Generators/giveaways; Contact to Buy; Malaysia/Singapore messaging; Supabase/RLS and analytics boundaries; Safari-safe layout; Development analytics-test exclusion in Development only.

## Intentionally removed / excluded
Do not restore Download Share Preview; V200 inquiry basket; V201 custom Share menu/grid; V202 share-menu experiment; V203/V204 compact-layout experiments; abandoned/superseded scanner/layout experiments; old Beta runtime dependencies; Development-only analytics-test behavior in Production; post-v09 duplicate Inventory Manager/dashboard renderer.

## SQL / database baseline
- Latest relevant Production migration remains `migrations/2026/2026-10-25-v03-EBAY-BANLIST.sql`.
- `public.ebay_banlist` remains Owner-only through RLS.
- Card Owner assignment uses existing private `card_owner_private` metadata and authorization.
- Production `2026-11-03-v01` required no SQL/database/RLS/Edge Function change.

## Release contract
A release is complete only after applicable implementation, validation, regression review, committed-file inspection, package integrity checks, immutable manifest, Pages deployment and rollback protection are confirmed. **Tested** means executed; **Statically verified** means repository/code inspection only; **Not tested** means unavailable/not performed. Do not live-open Production for routine testing without explicit authorization.

## Baseline maintenance
Reconcile this file in both Development and Production repositories after every accepted release or meaningful state change. Preserve historical release facts and retained/removed behavior; never rewrite immutable manifests from assumptions.
