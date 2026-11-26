# Collect TCG Current Baseline

<!-- BEGIN AUTOMATED BASELINE STATE -->
## GitHub state

- Development latest non-baseline commit: `6bfb83c38d4b4bdcc18ddd2cec760b548b7cc0a8`.
- Production latest non-baseline commit: `444c223d985002526f40323698f0e87afeef6dbc`.
- Production rollback ref: `608d6f58a4fdfccd8db8c4dc7b3eba6f7d55e774`.
- Latest local release manifest: [`2026-11-26-v05`](release-manifests/2026-11-26-v05.txt) from `c06342eb180e9a2743cd539fc58657fa29d63148`.
- Latest local change: `444c223d985002526f40323698f0e87afeef6dbc` · Production 2026-11-26-v06: promote editable invoice numbers and seller rename.

This section records GitHub state. The release manifest and workflow results determine validation and deployment status.
<!-- END AUTOMATED BASELINE STATE -->

## Production manual invoice numbers — 2026-11-26-v06

- Replaces v05 and promotes Dev `2026-11-26-v12` at `73ead33e3a586f188d1ec5a75b93100c7acf1af7`. The seller dropdown now uses Lim Poh Yeap. The invoice form accepts a manual number of 1 to 10 digits and still suggests the next number. Preview, saved PDF and archive use the same normalized number. Existing invoices cannot be overwritten. No SQL required. Production repository and Chromium fixture checks passed for manual, invalid and duplicate numbers, preview, PDF, download, next number, archived seller names, mobile layout and Owner gating. The release and both ZIP checks passed. All six changed live files matched and the rollback reference advanced to `163fe4b2f91161b93b607ed6bcec614e6889b86c`. Safari and signed-in live saves were not tested. [Release and packages](https://github.com/collecttcg/Collect_TCG/actions/runs/45842364608).


## Production automatic invoice PDF saving — 2026-11-26-v05

- Replaces v04. Promotes Dev `2026-11-26-v11` at `35d0da77fb2662560e691b199c2cb2dbc240e360`. Create and Save PDF generates an A4 invoice in the browser and uploads it to the existing shared private archive. Previewing still makes no upload, manual uploads remain available and existing invoice numbers cannot be overwritten. No SQL required. Chromium fixtures verified preview, duplicate rejection and retry, A4 PDF creation, archive details, byte-exact downloads, and mobile list fit. The release workflow and both ZIP integrity checks passed. Eight live files matched and the rollback reference advanced to `608d6f58a4fdfccd8db8c4dc7b3eba6f7d55e774`. Safari and signed-in live upload were not tested. [Release and packages](https://github.com/collecttcg/Collect_TCG/actions/runs/45814647744).


## Production invoice details and navigation — 2026-11-26-v04

- Replaces Production `2026-11-26-v03`. Promotes Development `2026-11-26-v10` at `5f0cf8d27d9daf1b6d4418f03fbf970887c44064`. Owner Tools has a dedicated Invoices tile and accepts the old Activity link. Archived PDFs supply seller, description and transaction date. The existing private shared archive and Production browser namespace are retained. Production repository checks and a Chromium fixture verified dedicated and legacy navigation, the shared bucket target, printed seller, description and transaction date, unreadable PDFs, search, mobile fit and Owner gating. Safari and signed-in live invoice viewing were not tested. No SQL required. Production release and both ZIP integrity checks passed. All eight changed live files matched the validated source, and the rollback reference advanced to `5ca75b6853393b4fe9f3d2234ae4353c1412e183`. [Release and packages](https://github.com/collecttcg/Collect_TCG/actions/runs/45812560127).


## Production shared invoice archive — 2026-11-26-v03

- Replaces Production `2026-11-26-v02`. The invoice workflow from Development `2026-11-26-v09` at `8435a60b808fe1f9aef2779404dc5f2ac2bd743b` now uses the same private `owner-invoices-dev` bucket in both environments. Invoice uploads remain manual. Uploads and deletions are reflected in both lists when refreshed. The former Production bucket was empty before the switch. No migration is required. Repository and Chromium fixture checks covered Owner gating, both sites seeing the same invoice, upload, download, deletion and mobile list fit. Live signed-in upload and Safari were not tested. The release workflow and both ZIP checks passed. Live Dev and Production scripts point to the same private bucket, where invoice 0000000001 was verified. Production rollback reference advanced to `4b809d6261c32c69ed10747352bfc188c127d1a0`. [Release and packages](https://github.com/collecttcg/Collect_TCG/actions/runs/45745952064).


## Production private invoice archive — 2026-11-26-v02

- Replaces Production `2026-11-26-v01`. Promotes the invoice workflow from Development `2026-11-26-v09` at `8435a60b808fe1f9aef2779404dc5f2ac2bd743b`. The premium invoice preview supports manual PDF upload, a searchable list, viewing and downloads. Production uses its own private bucket and browser storage namespace. The approved SQL migration was applied and verified. Production repository checks and Chromium fixtures covered Owner access, PDF upload and byte-exact download, viewing, search, duplicate handling, deletion, offline behavior and mobile layout. Live signed-in upload and Safari were not tested. The Production release passed on retry after an SEO branch update collision. The live deployment and both ZIP checks passed, and the rollback reference advanced to `0b3416de8a9573a4c37174a221d407b888263191`. [Release and packages](https://github.com/collecttcg/Collect_TCG/actions/runs/45663193590).


## Production Owner-only invoice generator — 2026-11-26-v01

- Replaces `2026-11-25-v07`. Promotes the invoice generator from Development `2026-11-26-v02` at `0f5dced49386a1bda75a61c3028b650691d5c58e`. The form has clearer field borders and keyboard focus, and optional multiline addresses for both parties. The printed invoice includes addresses when entered.
- Access follows the existing verified desktop Owner gate. Invoice details are processed in the browser. No SQL required. Local Production syntax, Owner access fixtures, and invoice output fixtures passed. Interactive browser and Safari testing were unavailable.
- Production release validation and both ZIP integrity checks passed. The release workflow’s deployment check timed out after GitHub Pages returned HTTP 500. A subsequent Pages run succeeded, and all 41 deployed files in the release contract matched commit `24d2eb20e3494624e92d54c0a3839dbee2c966ef`. The rollback ref was advanced to that verified commit. [Pages deployment](https://github.com/collecttcg/Collect_TCG/actions/runs/45649041096). [Release and ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45648805153).


## Production direct purchase tiers and centered example — 2026-11-25-v07

- Replaces `2026-11-25-v06`. Promoted Development `2026-11-25-v15` at `5f7a2410998d2be3629661c57a262d4d8c515900`.
- About uses 12% off the first US$2,500 per item and 3% on the portion above that. The centered table shows US$6,380 before shipping and US$620 saved, including the extra-item discount. No SQL required.
- Production validation and both ZIP integrity checks passed. The deployment matched the validated files, including the page-specific stylesheet, and the rollback reference advanced to `b212c7e0334a026f1e116bfdf267bc43afab7d25`. Interactive browser testing was not performed. [Release and ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45552771723).

## Production About buying options — 2026-11-25-v06

- Replaces `2026-11-25-v05`. Promoted Development `2026-11-25-v13` at `69813bc9e1ddcffdb6c919a2a233d49765bd0ff5`. About explains buying on eBay and buying directly, including 12% below US$2,500, 8% at or above US$2,500, and US$5 off each additional item. The two-card example totals US$6,355 before shipping. No SQL required.
- Production tests, rendered-markup checks and both ZIP integrity checks passed. Deployed files matched the release, and the rollback reference advanced to `76fbb480912ce07a045e9835be102086fdd687eb`. Interactive browser rendering was not tested. [Release and ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45551238282).

## Production eBay account labels — 2026-11-25-v05

- Replaces `2026-11-25-v04`. Promoted Development `2026-11-25-v12` at `a44fd73a7af5117423fe66ab090a854c58247794`. About and Contact show Collect TCG 1–5 with the existing eBay wordmark and remove repeated subtitles. Platform logos are also shown for Facebook, Messenger, Instagram and Carousell. Seller destinations and external-link arrows are retained. No SQL required.
- Production tests and both ZIP integrity checks passed. Deployed files, including both logo assets, matched the release, and the rollback reference advanced to `dada2282760f853723212520d603168b801dc6b1`. Interactive desktop, mobile and Safari rendering were not tested. [Release and ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45549982018).

## Production US eBay seller links — 2026-11-25-v04

- Replaces Production `2026-11-25-v03`. Promoted Development `2026-11-25-v10` at `a4838537e0a63f2773f7f273c81583ca358b7d81`.
- Seller profiles 3–5 use ebay.com in navigation, About and Contact, and Facebook card list and card drop posts. No SQL required.
- Production tests and both ZIP integrity checks passed. Deployed website files matched the release, and the rollback reference advanced to `3dd47ee48af2bd050dc6452a75cbf2e3366c0f46`. The external seller profiles were not opened interactively. [Release and ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45546432077).

## Production Post Generator tile logos and sort note — 2026-11-25-v03

- Replaces Production `2026-11-25-v02`. Promoted Development `2026-11-25-v09` at `6e98e627743323607838bc33149a4cfb2920ba98`.
- Single Card Post and Card List Post use the Facebook logo. The eBay sharing tile displays both brands, eBay Listing uses the eBay wordmark, and Carousell Post uses the Carousell icon. The generated Facebook post states that listings are sorted by year, oldest first. No SQL required.
- Production validation and both ZIP integrity checks passed. The deployment matched the validated files, including the three logo assets, and the rollback reference advanced to `be8e8b5135df2c2d165d3ceb0d1b4138881ee46e`. Interactive browser rendering was not tested. [Release and ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45545099994).

## Production Post Generator consolidation — 2026-11-25-v02

- Replaces `2026-11-25-v01`. Promoted Development `2026-11-25-v05` at `9b92b144a97b4453c7b7f507213616c08137f36d`.
- Single Card Post uses the Collection Showcase template for NFS cards. Giveaway switches the form and preview in place under shared tabs and fixes initialization of the Winners form. Existing links remain supported. “Share eBay Listings on Facebook” distinguishes that tool from eBay Listing. No SQL required.
- Production checks, ZIP integrity checks and deployed-file verification passed. The rollback reference advanced to `f332dd318123f7da0bdc8f313d20e0ba722b608c`. Interactive browser testing was not performed. [Release and ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45530101400).

## Production Owner sign-in, Card Details post actions and homepage title — 2026-11-25-v01

- Replaces Production `2026-11-24-v02`. Promoted approved changes from Development `2026-11-25-v03` at `c0470767362fa6e7560f493596484a249b91ac8c`.
- The bookmark closes the dialog after verified Owner sign-in. Owner view loading errors receive a separate notice. Card Details → More offers the Facebook, Carousell and eBay generators for the current card using the same Owner and eligibility rules as the card grid.
- The homepage tab and sharing title read “One Piece Cards in Malaysia & Singapore | Collect TCG.” No SQL required.
- Production checks and both ZIP integrity checks passed. Pages served the new homepage title and the release workflow verified deployed files. The last-known-good ref advanced to `2e7bbed971a4cdd8e592d96f1630db5db1b48aab`. Interactive Production browser checks were not performed. [Release and packages](https://github.com/collecttcg/Collect_TCG/actions/runs/45524875837) · [Pages deployment](https://github.com/collecttcg/Collect_TCG/actions/runs/45524932504).

## Production Owner sign-in bookmark — 2026-11-24-v02

- Replaces `2026-11-24-v01`. The direct Owner sign-in URL opens a password-masked dialog. The existing Supabase login and Owner verification apply, including the mobile Collection ordering limit. No public navigation or sitemap link was added. No SQL or backend change.
- Added a fixture for cancellation, rejected credentials and non-Owner access, successful sign-in, active-session revisits and desktop/mobile permission boundaries. See the release manifest and GitHub Actions for package and deployment evidence.
- Promoted Development `2026-11-24-v03` from `be8d285c0c80d940e8e17b2e428f5bc17c13c1fe`.

- Production validation and sign-in fixtures passed. CI verified both ZIPs and confirmed that deployed files matched the release. The rollback ref advanced to `4a703ca72ebbcf77aa3649a63398cb37637152f4`. Interactive Production browser checks were not performed. [Release and packages](https://github.com/collecttcg/Collect_TCG/actions/runs/45404609596) · [Manifest](release-manifests/2026-11-24-v02.txt).

## Production Facebook eBay 3×3 collages — 2026-11-24-v01

- Replaces Production `2026-11-23-v07`. Promoted Development `2026-11-24-v01` from `642c5b8ea145f82e535a1da10e063cb7ca6e8162`. Collages use nine photos in Facebook post order with centered partial rows. Above 225 listings, batches grow to preserve the 25-image cap.
- Production and ZIP fixtures passed, both packages passed integrity checks, and deployed files matched the release. Rollback ref advanced to `962fe678dd88c019dbb2d31f3962f7b230d1747f`. Interactive export was not tested. No SQL required. [Manifest](release-manifests/2026-11-24-v01.txt).

## Production Inventory toolbar and footer cleanup — 2026-11-23-v07

- Replaces v06 and promotes Development v20. Removed the standalone Carddass Hyper Battle link and the Inventory toolbar shortcuts Copy Filtered Link, Export Collage and Inventory QR. The collection URL, sitemap entry, Collection collage export, Inventory rearrange and pagination remain.
- Production checks, focused markup fixture and full/patch ZIP integrity passed. The workflow verified deployed files and advanced the rollback ref to `dd1f0913474c95d1efae8dd7398bf88462afe955`. Interactive browser testing was not performed. No SQL required. [Manifest](release-manifests/2026-11-23-v07.txt).

## Inventory pagination controls — 2026-11-23-v06

- Restored the shared pagination mounts and scroll guard on Inventory. The listing-shell fixture exercised Inventory, Sold and Collection. Live desktop Inventory showed 319 results and the bottom Next button advanced from 1–40 to 41–80. No SQL required. [Release manifest](release-manifests/2026-11-23-v06.txt).

## Production Inventory pagination and eBay links — 2026-11-23-v05

- Replaces Production `2026-11-23-v04` and promotes Development `2026-11-23-v16`, including v15 social links. Inventory uses Sold full-row pagination and shows a bottom bar when the result set spans multiple pages. The desktop social strip and mobile footer link to eBay accounts 1–5. No SQL required.
- Production checks, focused pagination markup fixture, and both ZIP integrity checks passed. The workflow verified deployed files and advanced the rollback ref to `d94d6dffcbba9047c756a4ebb14eee2949320be8`. Interactive desktop, mobile and Safari checks were not performed. [Manifest](release-manifests/2026-11-23-v05.txt).

## Production Sold listings and toolbar — 2026-11-23-v04

- Replaces `2026-11-23-v03`. Promotes Development `2026-11-23-v14` including v13 changes. Sort and Filters match Currency height. Sold grid fills rows, and listings and downloads use the new SOLD ribbon. Facebook posts restore the website and available eBay links and use the new title formatting.
- Production validation and both ZIP integrity checks passed. Deployed files were verified and rollback ref advanced to `0491b87345558b054de902d9e9e899397c6b6c04`. Interactive desktop, mobile and Safari checks were not performed. No SQL required. [Manifest](release-manifests/2026-11-23-v04.txt).


## Production private Facebook listing URL — 2026-11-23-v03

- Replaces `2026-11-23-v02` and promotes Development `2026-11-23-v04`. Owner Add/Edit can store one optional Facebook listing URL in existing owner-only metadata. No public listing output or database migration was required.
- Production validation, private URL fixture, SEO checks and both ZIP integrity checks passed. Deployed files were verified and the rollback reference advanced to `0ba1f844be9c64b149acaa63e3f1a11bdcc6ad42`. Interactive desktop, mobile, Safari and live authenticated saves were not tested. [Manifest](release-manifests/2026-11-23-v03.txt).


## Production larger Facebook collage numbers — 2026-11-23-v02

- Replaces `2026-11-23-v01`, promoting Development `2026-11-23-v03` from `cdbd03e39137836573ef5f5d377f643fdbaae8b4`. Listing numbers now use up to 54px bold text with a dedicated row beneath each image.
- Production validation, collage and SEO checks, and both ZIP integrity checks passed. The release workflow verified deployed files and advanced `production-last-known-good` to `726c739aeb688ad77bb9ecba2cbf76eef21bbeb2`. No SQL required. Interactive desktop, mobile and Safari exports were not tested. [Manifest](release-manifests/2026-11-23-v02.txt).


## Production Facebook eBay first-photo collages — 2026-11-23-v01

- Replaces `2026-11-22-v06` and promotes Development `2026-11-23-v02` from `7a6ded611f911ad0b00c7b5d437c8ad289e12160`. Selections through 25 export individual first photos. Larger selections export up to 25 numbered JPEG collages in Facebook post order.
- Production JavaScript, retained contracts, collage regression fixture, SEO and both ZIP integrity checks passed. The release workflow verified deployed files and advanced `production-last-known-good` from `46dae739f69001385ec221132ae892a655dbdb8f` to `81836b3c7dcdb55b076081e78b5b3ecbe8719f88`. Interactive desktop, mobile and Safari exports were not tested. No SQL required. [Manifest](release-manifests/2026-11-23-v01.txt).


## Sold eBay URLs recovered from order report

- Restored 22 verified links on live Sold cards from the seller-provided eBay Orders Report. Replaced the `eBay listing: yes` placeholders with exact item URLs and preserved other notes and existing links. A second review included rows with blank payment dates and restored 31 more verified links, including C04 Luffy, C08 Roronoa Zoro and C27 Mohji, for a total of 53. A second seller-provided report added 15 verified Sold URLs for a cumulative 68. A third report recovered 8 additional URLs from Sold listings with eBay checked, bringing the total to 76 with two checked listings pending confirmation. The seller confirmed both matches, and the original URLs were restored for the pre-errata First Stage lot and P-028 Ace, bringing the total to 78. This was a shared data correction with no migration, website release, or schedule change.


## Shared daily eBay cleanup — 2026-11-23

- Development `2026-11-23-v01` replaces `2026-11-22-v10`. The [Development manifest](https://github.com/collecttcg/Collect_TCG_Dev/blob/main/release-manifests/2026-11-23-v01.txt) records validation and both verified ZIPs.
- With explicit approval, deployed shared `ebay-listing-check` v2 (previous v1). Verified ACTIVE status and an exact match with the validated Development source. The 09:30 JST schedule uses that function. No SQL, RLS, schedule or website deployment was required. No live scan was run after deployment. Backend rollback is redeployment of v1 source from Production `429abcc2b361d351c080b91b0d80483c402d16a5`.
- Read-only review found 34 Sold cards without an eBay listing line. Available card edit history contained no original links for those cards, and no Sold records were modified for recovery.


## Production Facebook eBay owner filters and year order — 2026-11-22-v06

- Replaces Production `2026-11-22-v05`. Promotes Development `2026-11-22-v10` (source `18eccca9ef8fcb05831cc4a99b9a377305ea414c`), including the chronological ordering introduced in Dev v09. The Owner-only picker combines checked owners and Unassigned, with Era applied to those results. No checked owners shows all owners. The picker displays card years, and the post and first-photo ZIP follow oldest-first order. Date ranges use their starting year and undated cards appear last.
- Production retained contracts, Facebook/eBay fixtures, SEO regeneration, both ZIP integrity checks and deployed-file comparisons passed. Run 45014009693 advanced `production-last-known-good` to `46dae739f69001385ec221132ae892a655dbdb8f`. Interactive desktop, mobile and Safari checks were unavailable. No SQL or Edge Function change.
- [Manifest](release-manifests/2026-11-22-v06.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/45014009693/artifacts/14750619056).

## Production AI scanner accuracy — 2026-11-22-v05

- Replaces Production `2026-11-22-v04` and promotes Development `2026-11-22-v08` (source `4fb06598b30bdcbbee88814e4193c7691d57afdd`). Higher-detail first photo, optional scan-only close-up/back photo, ambiguity review, and variant-aware inventory comparables are in Owner Add Card. No SQL required.
- The separate Production `scan-card-ai` Edge Function advanced from v6 to v7. Deployed source matched the release and the unauthenticated endpoint returned HTTP 401. Backend rollback is separate from Pages and would require redeploying the prior function.
- Production scanner fixtures, retained contracts, SEO, both ZIP integrity checks and deployed-file comparisons passed. Run 44993143639 advanced the website rollback reference. Real-photo accuracy and interactive desktop, mobile and Safari checks were not measured.
- [Manifest](release-manifests/2026-11-22-v05.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/44993143639/artifacts/14742561999).


## Production Facebook Post · eBay Listings — 2026-11-22-v04

- Replaces Production `2026-11-22-v03` and promotes Development `2026-11-22-v07` (source `a48bb8bd98012bc4b76b217cb5f1b816b2134206`). The Owner-only mode filters available live cards with valid saved eBay URLs by Owner and Era, supports multiple selections, and generates a numbered Facebook post and first-photo ZIP in selection order. No SQL required.
- Production checks, feature fixtures, SEO, both package integrity checks, and deployed-file comparisons passed. Release run 44985463871 advanced the rollback reference. Interactive desktop, mobile and Safari checks were not performed.
- [Manifest](release-manifests/2026-11-22-v04.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/44985463871/artifacts/14738834070).


## Production eBay title fitting — 2026-11-22-v03

- Replaces Production `2026-11-22-v02` and promotes Development `2026-11-22-v06` (source `205665b10dddd85ad33192bd12533510416e9e24`). Titles already within 80 characters keep their wording. Longer titles retain applicable Vintage and ERROR labels and shorten catalogue wording first, including dropping CARDDASS when needed. No SQL required.
- Production syntax, retained contracts, title fixtures, SEO, ZIP integrity and deployed-file comparisons passed. Release run 44984429465 advanced the rollback reference. Interactive desktop, mobile and Safari checks were not performed.
- [Manifest](release-manifests/2026-11-22-v03.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/44984429465/artifacts/14739267616).


## Production watermark and title updates — 2026-11-22-v02

- Replaces Production `2026-11-22-v01` and promotes Development `2026-11-22-v05` (source `022016a7694756c45f6c33f3e9cd4e4f95adee0d`). Owner Add/Edit supports per-photo CTA/QR watermark placement. Vintage eBay titles start with `Vintage`. Error cards use `ERROR` in the editor and generated eBay titles, with earlier stored prefixes recognized. No SQL or bulk catalogue rewrite.
- Production syntax, retained contracts, generated title fixtures, SEO, ZIP integrity and deployed-file comparisons passed. The first run stopped on a stale bracketed-label assertion. The corrected run 44983015939 advanced the rollback ref from `fae891da787b293eece9ec2b3896ae7411ef71b9` to `db8387e8a9172297ac1948e1cc16c45a889ae890`. Interactive desktop, mobile and Safari checks were not performed.
- [Manifest](release-manifests/2026-11-22-v02.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/44983015939/artifacts/14739255002).


## Production qualified card view traffic source — 2026-11-22

- Production `2026-11-22-v01` replaced `2026-11-21-v03` and promoted Development `2026-11-22-v01` (source `c3dab4f892a7e8aa65790238741fd9b84e7557cf`). Owner Insights now displays the latest qualified card view's source alongside country and device. Historical views with no recorded source display Source unknown.
- The shared SQL migration was already applied and verified. The Production release passed retained contracts, SEO validation, package integrity and deployed-file comparisons. Pages run 44931748444 succeeded. Release run 44931694949 advanced `production-last-known-good` from `8fbfe5a4d3ef799129c2a453563aecc8197f4698`. Interactive desktop, mobile and Safari sessions were not performed.
- [Manifest](release-manifests/2026-11-22-v01.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/44931694949/artifacts/14718235638).


Last reconciled against GitHub: 2026-11-20


## Google Search Console ownership verification — 2026-11-21

- Published the Google-provided HTML verification file at the Production site root and confirmed that the live response matched the supplied file byte for byte. Keep it deployed for ownership rechecks. Search Console verification and sitemap submission are pending. No application code or SQL changes.

## Production collection SEO — 2026-11-21-v03

- Promoted Development `2026-11-21-v03` (source `fbf3679d8ca7c11a2071811f787cc1428b702976`) over Production `2026-11-21-v02`. Published the One Piece Carddass Hyper Battle collection with 245 public card links, a homepage link and more specific homepage metadata. No SQL required.
- Production release validated repository and retained contracts, JavaScript syntax, SEO generation and both ZIPs. Live HTTP checks verified the homepage, collection, project robots file, two card pages and sitemap with 435 URLs. The release workflow advanced `production-last-known-good` from `d35d8d733455224dd197c36879244770df89ce9d` to `8fbfe5a4d3ef799129c2a453563aecc8197f4698`. Interactive desktop, mobile and Safari sessions were not performed.
- Public search checks did not surface the Production site. Google Search Console inspection and submission require sign-in to the verified property. [Manifest and ZIP checksums](release-manifests/2026-11-21-v03.txt).

## Production eBay inventory cleanup — 2026-11-21-v02

- Production `2026-11-21-v02` replaces `2026-11-21-v01`, promoted from Development `2026-11-21-v02` at `9ea66c401649779ad7ca12d7f0c03e2d43040cfa`. Deployed `ebay-listing-check` and applied the scheduler authorization and daily cron migrations. The single shared job runs at 09:30 JST, 08:30 MYT/SGT. No card schema or RLS changes. Only confirmed ended eBay listing lines are cleared, with other notes preserved and concurrent edits guarded.
- Production dry run returned HTTP 200 with 31 ended among 128 listing IDs, and an unauthenticated request returned HTTP 403. First manual apply removed 31 links with zero lookup or write errors. Follow-up dry run checked 97 IDs with zero ended and zero errors. The job is active and its first timer-triggered run remains pending.
- Production release run 44905494117 passed retained contracts, SEO, both ZIP integrity checks, deployed-file comparison and rollback verification. Website rollback ref advanced from `8e02ec3c8e7f218797b39433a5d6743410a484cc` to `d35d8d733455224dd197c36879244770df89ce9d`. Backend rollback is independent of Pages: disable automatic cleanup with `cron.unschedule('collect-tcg-ebay-inventory-daily')`. Browser sessions were not required for the backend-only change.
- Changed the Edge Function, versioned migration, release workflow and baseline. [Manifest](release-manifests/2026-11-21-v02.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/44905494117/artifacts/14707622825).

## Production promotion of eBay title format — 2026-11-21

- Production `2026-11-21-v01` replaces `2026-11-20-v01` and promotes Development `2026-11-21-v01` (source `6a8697ff33333f77da439456943eee75bc6f208a`). Generated eBay titles use game, set/series, year, card name and card number. Condition and language remain in listing details. Exact card numbers receive space within the 80-character limit.
- The shared catalogue already supplies numeric series labels to both environments. No SQL or backend change was required for promotion.
- Production release `44879739940`, SEO refresh `44879739960`, and Pages deployment `44879792423` succeeded. Production syntax, generated-title fixtures, retained contracts, SEO, both ZIP integrity checks and deployed-file comparisons passed. Rollback ref advanced to `8e02ec3c8e7f218797b39433a5d6743410a484cc`, replacing `9691c20819996d34197a08361d1ed72183b0b236`. Interactive desktop, mobile and Safari sessions were not performed.
- [Manifest and ZIP checksums](https://github.com/collecttcg/Collect_TCG/blob/main/release-manifests/2026-11-21-v01.txt) and [full and patch ZIPs](https://github.com/collecttcg/Collect_TCG/actions/runs/44879739940/artifacts/14696608912).

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

## Daily eBay seller feedback sync — 2026-11-16

- The shared background job `collect-tcg-ebay-feedback-weekly-dev` now runs daily at 09:00 JST (00:00 GMT) via applied migration `dev_2026_11_16_v01_ebay_feedback_daily`. It retains its existing job name and signed command. The same eBay feedback cache supplies Dev and Production Reviews. No website deployment or Supabase Edge Function change was required.
- Confirmed the active daily schedule and identical job command. A manual run of the exact scheduled command returned HTTP 204 and advanced the success timestamps for accounts 1, 2, 3 and 5 at 17:23 JST. Account 4 is unconnected. The first timer-triggered daily run is due November 17 at 09:00 JST.

## Current Production release — Carddass category rename — 2026-11-20

- Production `2026-11-20-v01`, previous `2026-11-19-v01`, promoted from validated Development `2026-11-20-v02` (source `7eabc9c28ea3ba9806718d65c990a668addf50ec`). Promotion source `e6f5fb5d295a2430a8cea4979a31d9a9788530df`; packaged source after SEO regeneration `e87c693e3cf7e1dd73c8d9c9674c7dfe2089ef1e`. [Manifest and ZIP checksums](release-manifests/2026-11-20-v01.txt).
- Existing cards display **One Piece Carddass Hyper Battle** instead of **One Piece Hyper Battle**. Add/Edit choices and generated public card metadata use the new name. Both names work with filters/search. Stored card values and category-order keys retain their legacy format for compatibility. No SQL, schema, RLS, scheduler, Edge Function or shared-data mutation was needed.
- Changed `src/services/catalogue.js`, `src/features/cards/presentation.js`, `src/features/inventory/filtering.js`, app registry/main and HTML cache references, Production SEO generator, generated card/Reviews pages and sitemap/slug records, and Production release workflow. Production-specific Hidden Listings Owner filtering, scanner endpoints, analytics boundaries, persisted Owner filter settings and public indexing directives were retained.
- Independent Production checks passed: all 81 JavaScript/import/structure checks; 350 golden filter/sort scenarios; category read/write/new-entry and live/draft/archived fixtures; legacy/new search/filter aliases; shared inventory/collection ordering keys; CSS, post-title, SEO and retained/Owner isolation contracts. All 426 existing public card URLs common to the prior and refreshed catalogue were preserved in committed output.
- Production Release `44683597737` succeeded, including SEO generation, full/patch ZIP creation and integrity checks, immutable manifest, deployed-file checks and advancing `production-last-known-good` to `9691c20819996d34197a08361d1ed72183b0b236`. Pages `44683652910` succeeded. Live homepage, main/registry, catalogue, choices and filtering modules, plus a generated renamed card page, matched committed content. Static HTTP requests did not execute application analytics.
- Standalone SEO refresh `44683597828` initially hit a concurrent GitHub push conflict; the release independently published the generated output, and the standalone job succeeded on retry. Interactive desktop/mobile and Safari browser sessions were not performed.
- [Full and patch ZIP artifact](https://github.com/collecttcg/Collect_TCG/actions/runs/44683597737/artifacts/14605298517), retained by GitHub for 30 days. Historical manifests remain immutable.

## Previous Production release — Owner filter persistence — 2026-11-19

- Production `2026-11-19-v01`, previous `2026-11-15-v04`, promoted from Development `2026-11-19-v01` (source `9e1095cc981299d4d0cb83fa76c831d44c7a8daf`). [Manifest and ZIP checksums](release-manifests/2026-11-19-v01.txt).
- Card Owner selection is restored from browser localStorage after refresh. All Owners and Clear All remove it. Production uses a separate preference key from Dev. Public filtering remains Owner-gated. No SQL or backend changes.
- Updated the Owner category module, app cache entry points, generated Reviews/card HTML, and release workflow. Production lifecycle fixtures covered refresh, clearing before redraw, invalid/unavailable storage and public isolation. Production checks, SEO and both package integrity checks passed in release `44447284661`. The release verified deployed files and advanced rollback ref to `c65d68cd4c81f63b0182f6483fe3b37553a2914b`. The served filter module, homepage and registry matched the release. Interactive browser/Safari testing was not performed.

## Previous Production release — Desktop navigation — 2026-11-15

- Production `2026-11-15-v04`, previous `2026-11-15-v03`, promoted from Development `2026-11-15-v07` (source `020aa23bc087c3c7ffbd97e37dbfe97f688c428a`). [Manifest and ZIP checksums](release-manifests/2026-11-15-v04.txt).
- Desktop now shows Reviews in the primary row, with Giveaway under More. The compact desktop header follows the same layout. Mobile keeps the original header and More menu order. The Reviews URL remains `/Collect_TCG/reviews/`. No SQL or backend changes.
- Updated app shell, generated Reviews and card pages, responsive nav CSS, navigation active-state logic, entry point caches and release workflow. Production release `43724799373` and Pages `43724833485` succeeded. Verified full and patch ZIPs, live release files, and rollback ref at `3585e4b7b05c815a117ec4d7b9755a2efaed0a58`.
- Standalone SEO refresh `43724799394` encountered a concurrent push; the successful Production release regenerated, validated, and published the SEO pages. Navigation markup and active-state fixtures passed. Interactive browser and Safari testing and Google indexing were not verified.

## Previous Production release — Clean Reviews URL — 2026-11-15

- Production `2026-11-15-v03`, previous `2026-11-15-v02`, promoted from Development `2026-11-15-v05` (source `6a3629f2447ab1db957d8078a76772b9bac6eac9`, including Dev v04 feedback filter removal). [Manifest and ZIP checksums](release-manifests/2026-11-15-v03.txt).
- Published `/Collect_TCG/reviews/` with its own canonical URL, title, description, crawlable navigation, static page heading and summary, and sitemap entry. Existing `#/reviews` links resolve. eBay seller feedback displays as one paginated list. No schema, authorization, Edge Function, or SQL changes.
- Updated Reviews, app routing and entry points, generated Reviews and card HTML, sitemap, SEO generator, and release/SEO workflows. Production route and pagination fixtures passed, and the release workflow `43720319868` completed after retrying an SEO push race. SEO refresh `43720319942` and Pages `43720343524` succeeded. The workflow verified both ZIPs and matched live release assets. Rollback ref verified at `0c19b5af5fd7b3aa8eabe612c0af5b5de36ca3f1`.
- Interactive browser/Safari and Google indexing were not verified. No search result star markup was added.

## Previous Production release — Reviews — 2026-11-15

- Production `2026-11-15-v02`, previous `2026-11-15-v01`, promoted from Development `2026-11-15-v03` (Reviews frontend only, source `1b92e890e98e21363cba8236b3ed74eb16c09f9e`). [Manifest and ZIP checksums](release-manifests/2026-11-15-v02.txt).
- Reviews now shows eBay reputation and sentiment totals, seller account filtering, ten reviews per page in both public lists, and Owner-only connection and sync controls. Existing Supabase feedback and sync endpoints are reused. No SQL, RLS, scheduler, or Edge Function change was required for this promotion.
- Application changes: `src/features/content/reviews.js`, `src/app/register-features.js`, `src/main.js`, `index.html`; release workflow and generated SEO card entry pages updated.
- Production release workflow `43712857967` passed checks, SEO regeneration, full and patch ZIP verification, and comparison of the deployed site files against release source. Pages `43712903625` succeeded. Rollback ref `production-last-known-good` verified at `28a13c67d0bcded8dcfb2704be54973646a8050c`. The separate SEO push run `43712857946` failed at its generated-files commit step; the release workflow regenerated and published the files.
- Production fixture tests exercised pagination, filtering, empty/error states, and public control visibility. Interactive desktop/mobile/Safari and signed-in eBay OAuth were not exercised.

## Previous reconciled state — 2026-11-15

- Production `2026-11-15-v01`, previous `2026-11-14-v03`, promoted from Development `2026-11-15-v02` (`95bb2e07c8e12eaf272ce53fd987e275bfb2f1a1`). [Release manifest and ZIP checksums](release-manifests/2026-11-15-v01.txt).
- The desktop and mobile inventory quick filters read “Listed on eBay”. The filter still uses `quick=ebay`. No SQL required.
- Production checks and ZIP integrity checks completed. Pages served the new entry point and label. Interactive browser testing was not performed. The observed rollback ref remains `e1047a76f9c6570bf9b6e2f8cd16b3431f2df355`.

## Previous Production release — 2026-11-14-v03

- Production `2026-11-14-v03`, previous `2026-11-14-v02`, promoted from Development `2026-11-14-v04` (`1566fdd208dccf54440fbe30cdfa139cf6958ea4`). [Release manifest and ZIP checksums](release-manifests/2026-11-14-v03.txt).
- On eBay replaces Championship in the desktop and mobile quick-filter row. Existing Championship URLs still resolve. No SQL required.
- Production JavaScript, CSS, retained behavior, SEO generation, and ZIP integrity checks completed. Production Pages served the new entry point and filter markup. Interactive Production browser testing was not performed. The last observed rollback ref remained `e1047a76f9c6570bf9b6e2f8cd16b3431f2df355`.

## Previous Production release — 2026-11-14-v02

- Production: `2026-11-14-v02`; previous `2026-11-14-v01`. Promoted from Development `2026-11-14-v03` (`e23b55ff9b1fc400f50168835ab5d603c15a96ee`). [Production release manifest and ZIP checksums](release-manifests/2026-11-14-v02.txt).
- Owner Add Card and Edit Card can upload, select, and rename originals in the shared private Photo Library. Published listing copies are stored separately.
- The Owner-only rename migration was applied to shared Supabase and its policy was verified. Production served the new entry point and Photo Library code. The release workflow recorded package integrity checks. Signed-in browser testing remains pending, and rollback-anchor advancement has not been confirmed.
- The automated GitHub state section above tracks repository commits, manifest pointers, and the observed rollback ref. Update this narrative summary whenever a release or meaningful state change is confirmed.

## Historical reconciled state — 2026-11-12

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


## Current working baseline — 2026-11-13 (post-release maintenance; not an immutable release)

This section records subsequent GitHub commits and does **not** supersede the last validated immutable release manifest, change the protected rollback anchor, or imply a successful browser-test matrix.

### Production and Development state
- Card-detail purchase-area Safari mitigation: constrain desktop Contact to Buy / eBay purchase action heights and avoid percentage-height stretching of the right column. Development commits `ad868cec` (CSS) and `1ded49da` (stylesheet cache); Production commits `d4d24f0b` (CSS) and `5c0b0d9b` (stylesheet cache).
- eBay Post Generator **Prepare eBay Listing** now downloads the selected card's image ZIP **without copying** the title, item specifics or description to the clipboard. The separate Copy Title, Copy Item Specifics, Copy Description and Copy All controls retain explicit clipboard behavior. Both repositories received the marketplace module update and import-chain cache refresh on 2026-11-13.
- Production eBay generator final code/cache commit: `151003ef591ec570ea11285edf8f7d60b9ae1989`; Development final code/cache commit: `ced0d43f456f3aa2c2ff4d251b3fb8768d1fb063`.
- Existing eBay image ZIP download behavior, Owner access checks, card selection and listing text fields remain retained.
- The 2026-11-13 maintenance changes require no known SQL, Supabase RLS or Edge Function migration.
- **Verification scope:** GitHub write operations succeeded and source behavior was inspected. No interactive Safari/Chrome/Firefox/Edge/mobile regression run, release-package checksum, new immutable release manifest, Pages deployment confirmation or rollback-anchor advancement is claimed for these maintenance commits.

### Forward maintenance rules
- Do not reintroduce automatic clipboard writes in Prepare eBay Listing. Copying must remain an explicit action on a dedicated Copy button.
- Do not restore the desktop percentage-height purchase CTA behavior that caused Safari's tall yellow panel.
- Preserve Development and Production separation; promote only explicitly approved changes. Keep immutable historical release records and last-known-good rollback anchors unchanged until the full release validation contract is satisfied.


## Production promotion — 2026-11-13 (Development to Production)

- Promoted Facebook Post Generator sold-card behavior: replace **only** the price/details card URL with a single line `💰 SOLD PRICE: USD [recorded price]` for Sold cards; keep Available card price/details URLs unchanged. Missing sold prices display `Price unavailable`. Production commit `092e2a7b`.
- Preserve saved **eBay Listing URL** for both Sold and Available cards, independent of whether the website card URL appears in the post. Production commit `0d6af7cb`. Never remove this URL while changing price display.
- Promoted latest qualified-view country and Mobile/PC context in Owner Insights, with graceful `Country unknown` / `Device unknown` fallbacks, and coarse device recording for new qualified views. Production commits `903f9f22`, `2bba9d69`. Existing historical records may lack device data. The shared Supabase migration had previously been applied; end-to-end live device capture is not separately verified.
- Updated Production module import versions and browser entry cache keys in `2766780a`, `8c32fd05`, `c722134b`.
- **Production SEO refresh validated:** GitHub Actions run `43411254815` completed successfully with Production repository checks, generator self-test, generated SEO page checks and refreshed-page commit. This is SEO workflow validation, not an interactive multi-browser release regression or immutable release manifest.
- Preserve the existing Production rollback anchor, historical release manifests, Safari purchase-button sizing, eBay ZIP download behavior and explicit-only clipboard copying.


## Production promotion candidate — 2026-11-14

- Production release `2026-11-14-v01` is sourced from Development `2026-11-14-v01` (`a9e2d7fd08aedd9c9b45596a5481be2b1d18b635`). The release manifest records completed packaging. Pages served the release assets. Rollback-anchor advancement was not confirmed.
- Desktop inventory sort and filter controls use 11px type and 40px height at widths of 992px and above, with an 18 × 18px eBay checkbox. About Us lists the five official eBay accounts.
- The November 13 sold-post and Insights updates were already present. Development eBay feedback and its separate SQL migration are excluded. This promotion requires no SQL.
