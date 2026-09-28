# Collect TCG MY & SG

Official website for **Collect TCG MY & SG**.

We are a group of friends and dedicated trading card collectors based in Malaysia and Singapore. Our collection focuses on rare collectibles, vintage cards, tournament prize cards, premium grails, and other interesting TCG items from our personal collections.

## Website Features

- Browse current card inventory and collections
- Filter cards by game, format, grade/condition, language, and era
- View detailed card information and pricing
- Explore vintage and championship cards
- View showcases, giveaways and related-card discovery
- Contact to Buy with Malaysia/Singapore purchase messaging
- Mobile and desktop responsive design

## Trading Card Games

The collection includes One Piece Card Game, Pokémon, Gundam, Zatch Bell!, Digimon, Dragon Ball and other collectible card games.

## Engineering structure

This repository is **Production** and is protected.

| Path | Purpose |
|---|---|
| `src/` | Active Production JavaScript and styles |
| `assets/` | Runtime local image assets |
| `cards/` | Generated public SEO card pages |
| `migrations/2026/` | Versioned Supabase SQL migration history |
| `tools/` | SEO and repository validation tooling |
| `release-manifests/` | Immutable release/package checksum records |
| `COLLECT_TCG_BASELINE.md` | Current Beta/Production baseline and retained/removed feature state |

Generated SEO card pages, `seo-slugs.json`, `sitemap.xml` and `robots.txt` are intentional repository content.

Historical SQL migration filenames are preserved. Their presence in the repository does not prove that a migration was applied.

## Current Production release

`2026-09-28-v03` — promotes validated Development `2026-09-28-v03` saved manual USD/SGD Edit-price preservation while retaining Production-only SEO, QR Generator, analytics and rollback safeguards.

## Recovery

The `production-last-known-good` branch tracks the latest validated Production release whose final package-validation commit successfully deployed through GitHub Pages. See `docs/BACKUP-RECOVERY.md` for rollback and separate backup-repository procedures.

## About

We do not operate a physical storefront and are currently not accepting consignment items.

Pricing and availability may change. Please refer to our current listings and website information.

Hosted using **GitHub Pages**.

---

© Collect TCG MY & SG
