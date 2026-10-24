<!--
  VERSION HISTORY (newest first)
  v1.0.0  2026-10-23  First entry.
-->
# Player Notes — Changelog

Every past build is kept in `versions/`. To roll back, copy an older file over `index.html`, bump
`CACHE` in `sw.js`, and push. Rosters and notes stored on your devices are not affected.

## v1.0.0 — 2026-10-23 — First build
- Installable offline web app (PWA) on the RaceNotes / Receipt Log pattern: one `index.html`,
  `sw.js`, manifest, icons, Austin Bergquist brand logos.
- Every NFL player and team defense from Sleeper's free public API: season totals, single weeks and
  this/next week's projections for the current season and the two before it; PPR, Half PPR or
  Standard scoring (IDP players use Sleeper's IDP points).
- Filters: name search, team (or free agents), position chips (QB RB WR TE FLEX K DEF DL LB DB OL P),
  "only players with stats", "on my roster". Every column sorts. Columns change by position:
  passing / rushing / receiving / kicking / team defense / IDP tackles / snaps / punting.
- Position rank (Rk), bye week, and opponent for week views.
- Player card: bio, injury, depth chart spot, next game and projection, week-by-week game log with
  totals, roster toggles, and a personal notes box that autosaves.
- Fantasy rosters: several rosters (one per league), lineup slots you set (incl. FLEX and IDP),
  Start / Bench, Auto lineup by projection (skips byes and Out/IR), BYE and injury flags,
  starters' projected and season totals.
- Stats are cached on the device (IndexedDB) so the app opens offline; Refresh data pulls fresh.
- Backup & restore of rosters and notes (merges).
- Files: `versions/playernotes-v1.0.0.html`
