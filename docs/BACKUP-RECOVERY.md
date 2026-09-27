# Production Backup and Recovery

## Purpose

Collect TCG uses layered recovery instead of treating a second repository as the only rollback mechanism.

1. Production Git history preserves every validated release.
2. Full Production ZIP packages preserve immutable release snapshots.
3. The `production-last-known-good` branch tracks the most recent Production release whose final package-validation commit successfully deployed through GitHub Pages.
4. A separate `collecttcg/Collect_TCG_Backup` repository is the recommended repository-level disaster-recovery mirror.

## Current last-known-good

At creation, `production-last-known-good` points to validated Production `2026-09-27-v02` final HEAD:

`f5bc0cdbc26fcb22678f7444dd19b462db7ee20a`

The branch is advanced automatically by `.github/workflows/backup-last-known-good.yml` only when:

- GitHub Pages completed successfully;
- the deployed commit is on `main`;
- the commit message is the final `Production YYYY-MM-DD-vNN: record package validation` commit;
- the matching release manifest exists and has the required release/package metadata; and
- the candidate is a descendant of the current last-known-good branch, preventing an old workflow rerun from rolling the backup backwards.

A failed validation, package job, or Pages deployment does not advance the branch.

## Normal rollback

Do not force-reset Production `main` as the normal recovery procedure.

If a newly deployed Production release has a regression:

1. Identify the current `production-last-known-good` commit.
2. Compare it with the broken Production release.
3. Restore the last-known-good website state into a **new Production rollback release**.
4. Preserve release manifests/history.
5. Run Production validation independently.
6. Create full + previous-to-new patch ZIPs.
7. Deploy and confirm GitHub Pages.
8. Only then allow `production-last-known-good` to advance again.

This keeps the audit trail intact instead of erasing the broken release from Git history.

## Separate backup repository

Recommended repository:

`collecttcg/Collect_TCG_Backup`

Recommended settings:

- Private if practical.
- No GitHub Pages deployment required.
- No direct development.
- No feature work.
- Mirror only validated `production-last-known-good` states.
- Keep `main` as the recovery snapshot branch.
- Do not mirror raw unvalidated Production `main` commits.

The current ChatGPT GitHub connection can modify existing repositories but cannot create repositories or configure repository secrets/admin settings. Therefore creation of the separate repository is a one-time GitHub account action.

Create an **empty** repository named `Collect_TCG_Backup` under `collecttcg` (no README, .gitignore, or license). Once it exists, it can be populated from `production-last-known-good` and its mirror workflow can be configured without changing the Production application.

## Disaster recovery

If the Production repository itself becomes unavailable or unusable:

1. Use `Collect_TCG_Backup` as the repository-level recovery source.
2. Verify the mirrored Production version/commit against its release manifest.
3. Restore the snapshot into Production.
4. Validate Production independently before deployment.
5. Do not restore newer Development/Beta-only behavior unless it was part of the backed-up validated Production release.

## Database limitation

Git/repository backup does **not** back up Supabase database contents.

Database backup and restore must be handled separately. SQL migration history in Git records schema changes but is not a copy of live database data.
