# Collect TCG MY & SG

Official website for **Collect TCG MY & SG**.

We are a group of friends and dedicated trading card collectors based in Malaysia and Singapore. Our collection focuses on rare collectibles, vintage cards, tournament prize cards, premium grails, and other interesting TCG items from our personal collections.

## Website Features

- Browse current card inventory and collections
- Filter cards by game, format, grade/condition, language, and era
- View detailed card information and pricing
- Explore vintage and championship cards
- View showcases, giveaways and related-card discovery
- Contact to Buy with Malaysia/Singapore purchase messaging and supported international-shipping enquiries
- QR Generator and Owner Post Generator tools
- Owner-only inventory and operational tools
- Owner-only eBay Ban List with Supabase-backed storage
- Mobile and desktop responsive design

## Trading Card Games

The collection includes One Piece Card Game, Pokémon, Gundam, Zatch Bell!, Digimon, Dragon Ball and other collectible card games.

## Engineering structure

This repository is **Production** and is protected. Development work is performed in `collecttcg/Collect_TCG_Dev` and is promoted here only after explicit approval and validation.

| Path | Purpose |
|---|---|
| `src/` | Active Production JavaScript and styles |
| `assets/` | Runtime local image assets |
| `cards/` | Generated public SEO card pages |
| `migrations/2026/` | Versioned Supabase SQL migration history |
| `tools/` | SEO and repository validation tooling |
| `release-manifests/` | Immutable release/package checksum records |
| `COLLECT_TCG_BASELINE.md` | Current Development/Production baseline and retained/removed feature state |

Generated SEO card pages, `seo-slugs.json`, `sitemap.xml` and `robots.txt` are intentional repository content.

Historical SQL migration filenames are preserved. Their presence in the repository does not by itself prove that a migration was applied.

## Current Production release

**`2026-10-25-v03`**

- Previous Production: `2026-10-25-v02`
- Development promoted from: `2026-10-25-v08`
- Adds the Owner-only eBay Ban List with search, add/edit/remove and copy controls.
- Includes the corrected Owner navigation insertion logic that prevents the `insertBefore` startup regression found during Development v07.
- Promotes improved AI card-scanner backend error reporting while preserving the Production scanner endpoint.
- Preserves Production QR Generator, Post Generator, analytics/privacy behavior, Contact to Buy, giveaways, Owner Mode and rollback safeguards.
- The eBay Ban List database migration is applied with Owner-only Supabase RLS.

Latest validated package record: `release-manifests/2026-10-25-v03.txt`.

## Recovery

The `production-last-known-good` branch tracks the latest validated Production release whose final package-validation commit successfully deployed through GitHub Pages. For `2026-10-25-v03`, it points to the validated final Production baseline.

See `docs/BACKUP-RECOVERY.md` for rollback and separate backup-repository procedures.

## About

We do not operate a physical storefront and are currently not accepting consignment items.

Pricing and availability may change. Please refer to our current listings and website information.

Hosted using **GitHub Pages**.

---

© Collect TCG MY & SG
