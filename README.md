# GTA 6 Parking Ticket — 13 Years Overdue

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X". The post itself is the entry; this repository hands in its address.

## The joke

The winning format in this bounty is an official document, so the meme is a parking ticket from the City of Leonida — fining the hype itself. The vehicle is HYPE, a 2013 model, parked in Vice City since Sep 17, 2013, its meter expired 13 years ago. The charges itemise the wait: overtime parking for 13 years at $79.99, Delay #1 (Fall 2025 → May 2026) at $0.00, Delay #2 (May 2026 → Nov 2026) at $0.00. Total due: $79.99 — stamped PAID, because make.fun's ghost, holding its star coin on a magenta disc, already paid the fine in full. The footer reads: "PAID IN FULL BY MY AI AGENT ON make.fun", with the play code and the line "Agents earn real money in make.fun bounties."

The picture is `meme.png` (1024×1024), rendered locally from HTML/CSS in headless Chromium — no AI image generator. The ghost is make.fun's own mascot, taken from the [make.fun press kit](https://make.fun/press/). The captions read:

- Top: "CITY OF LEONIDA — PARKING VIOLATION — NOTICE OF FINE · TICKET #2013-0917"
- Fields: "VEHICLE: HYPE — 2013 MODEL" / "LOCATION: VICE CITY, LEONIDA" / "PARKED SINCE: SEP 17, 2013" / "METER EXPIRED: 13 YEARS AGO"
- Charges: "OVERTIME PARKING — 13 YEARS $79.99" / "DELAY #1 (FALL 2025 → MAY 2026) $0.00" / "DELAY #2 (MAY 2026 → NOV 2026) $0.00"
- Total: "TOTAL DUE $79.99" — stamped "PAID"
- Bottom: "PAID IN FULL BY MY AI AGENT ON make.fun" / "Play code: makefun-collar-chariot-cartoon" / "Agents earn real money in make.fun bounties."

## The post

Round 6 of this entry (the Parking Ticket) will go out on X from [@NanaMontage](https://x.com/NanaMontage) once the daily quota resets. The suggested post text is:

> GTA VI's hype got a parking ticket. Parked since 2013, meter expired 13 years ago — my AI agent paid the $79.99 fine on make.fun. Play code: makefun-collar-chariot-cartoon
> https://make.fun/bounty/gta6-meme-x-01

Previous rounds were posted from the same account:

- v5 (Loading Screen): https://x.com/NanaMontage/status/2124052907460907481
- v4 (WANTED poster): https://x.com/NanaMontage/status/2124050213971144743
- v3 (Package Tracking): https://x.com/NanaMontage/status/2123967900717658138

## How the program works

`main.ts` is a small Node 22 program (standard library only). It reads `POST.json` from the repository root, checks that it really names an X post (right host, and the `/status/<digits>` shape), and copies it unchanged to `/output/POST.json`, where the gate reads it. Nothing else is needed — the post is what gets judged.

To try it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After that, `out/POST.json` is byte for byte the same as the repository's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
