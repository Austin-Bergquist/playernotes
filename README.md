<!--
  VERSION HISTORY (newest first)
  v1.0.0  2026-10-23  First README.
-->
# Player Notes

Stats for every NFL player, sortable by team, position and any stat column, plus fantasy rosters
and your own notes on each player. Installs on your phone and PC and works offline with the last
stats it downloaded. Current version: **v1.0.0** (see `CHANGELOG.md`).

Live at: **https://austin-bergquist.github.io/playernotes/**

## Using it

- **Players tab.** Search by name, pick a team, tap a position chip (QB, RB, WR, TE, FLEX, K, DEF,
  DL, LB, DB, OL, P). The stat columns change to fit the position. Tap any column header to sort
  (tap again to flip it).
- **Season / period.** This season and the two before it. Pick season totals, a single week, or
  this week's and next week's **projections**. Scoring can be PPR, Half PPR or Standard.
- **Rk** is the player's rank at his position by fantasy points for whatever period you're looking
  at. **Bye** and **Opp** come from the NFL schedule.
- **Tap a player** for his card: bio, injury, next game with projection, week-by-week game log,
  which of your rosters he's on, and a **My notes** box that saves as you type (a green dot marks
  players you've written notes on).
- **+** next to a name adds him to your current roster (✓ means he's on it; tap again to remove,
  with Undo).
- **My Roster tab.** Make a roster per league (**New roster**). Set the lineup slots to match your
  league under *Lineup slots* (default QB, 2 RB, 2 WR, TE, FLEX, K, DEF; IDP slots available).
  **Start / Bench** each player or tap **Auto lineup** to fill the slots by this week's projections
  (skips byes and players listed Out/IR). Starters on bye get a red **BYE** flag.

## Where the stats come from

Sleeper's free public API (`api.sleeper.app`) — no account or key. The app downloads the player
list once a day and stats every 20 minutes during games, and keeps a copy on the device so it opens
offline. **Refresh data** pulls the latest right away. Not affiliated with the NFL or Sleeper.

## Your data

- Rosters and notes are saved on each device only; nothing is uploaded.
- **Backup & restore → Download backup** saves them to a file. Restoring on another device merges
  (nothing is deleted; differing notes on the same player are kept together).
- Clearing the browser's site data or uninstalling erases that device's rosters and notes — that's
  what the backup is for.

## Install it

- **iPhone:** open the link in **Safari** → Share → **Add to Home Screen**.
- **Android:** open the link in **Chrome** → **Install app**.
- **PC:** open the link in **Chrome or Edge** → the **Install** icon in the address bar (or the
  app's own **Install app** button).

## Updating to a new version

Change `index.html`, copy the new build into `versions/`, add a CHANGELOG entry and a line to the
VERSION HISTORY block at the top of each changed file, bump `VERSION` in `index.html` and `CACHE`
in `sw.js`, then commit and `git push`. GitHub Pages republishes in about a minute and installed
apps pick it up the next time they open online.

To roll back, copy a file from `versions/` over `index.html`, bump `CACHE` in `sw.js`, and push.

## What's in here

| File | What it is |
| --- | --- |
| `index.html` | The app |
| `sw.js` | Offline support |
| `manifest.webmanifest`, `icons/` | Install name and icons (rendered from `brand/app-icon.svg`) |
| `brand/` | Austin Bergquist logos and the app icon source |
| `versions/` | Every past build, for rollback |
