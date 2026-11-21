# GTA 6 Wanted — The Poster

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X". The post itself is the entry; this repository hands in its address.

## The joke

GTA 6 has been "wanted" for years, so the meme is a GTA-style police bulletin for the game itself. It is WANTED for grand theft of our time, patience, and $70 pre-orders, last seen in a December 2023 trailer, with five gold wanted stars and a $500 reward to claim on make.fun. Meanwhile make.fun's ghost — sunglasses on, star coin in hand — is the bounty hunter on the case. The footer warns: "If seen, do not approach. Just wait. Again."

The picture is `meme.png` (1024×1024). The ghost is make.fun's own mascot, taken from the [make.fun press kit](https://make.fun/press/). The captions read:

- Top: "WANTED — GRAND THEFT AUTO VI"
- Charges: "Grand theft of our time, patience, and $70 pre-orders."
- Last seen: "Dec 2023, in a trailer"
- Reward: "$500 — claim it on make.fun"
- Bottom: "If seen, do not approach. Just wait. Again."

## The post

Round 4 of this entry (the WANTED poster) went out on X from [@NanaMontage](https://x.com/NanaMontage):

https://x.com/NanaMontage/status/2124050213971144743

> GTA VI is WANTED. Last seen December 2023. Reward: $500 on make.fun. Play code: makefun-collar-chariot-cartoon
> https://make.fun/bounty/gta6-meme-x-01

Previous round (v3, "Package Tracking" courier card) was posted from the same account:

https://x.com/NanaMontage/status/2123967900717658138

> GTA VI is still out for delivery. The ghost already got paid on make.fun. Play code: makefun-collar-chariot-cartoon
> https://make.fun/bounty/gta6-meme-x-01

## How the program works

`main.ts` is a small Node 22 program (standard library only). It reads `POST.json` from the repository root, checks that it really names an X post, and copies it unchanged to `/output/POST.json`, where the gate reads it. Nothing else is needed — the post is what gets judged.

To try it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After that, `out/POST.json` is byte for byte the same as the repository's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
