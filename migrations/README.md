# Production Supabase migrations

This directory contains Production SQL migration history.

- Existing migration filenames are immutable.
- Repository presence does not prove that a migration was applied.
- Moving existing files into this directory does not reapply SQL.
- New database changes require a new versioned SQL migration.
- Preserve RLS and backward compatibility unless the requested change explicitly requires otherwise.
