# GTA 6 Still Shipping — Package Tracking

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X". The post itself is the entry; this repository hands in its address.

## The joke

GTA 6 has been "shipping" for years, so the meme treats it as a package that never arrives. It is a make.fun Courier tracking card: "OUT FOR DELIVERY in Leonida, Florida — still on the truck." The timeline runs DEC 2023 (trailer drops, everyone orders), FALL 2025 (expected… DELAYED), and 26 MAY 2026 (new delivery date), with the footer "Estimated: whenever Rockstar says so." Meanwhile make.fun's ghost, sunglasses on and star coin in hand, already got paid.

The picture is `meme.png` (1024×1024). The ghost is make.fun's own mascot, taken from the [make.fun press kit](https://make.fun/press/). The captions read:

- Top: "TRACKING: GTA VI"
- Card: "OUT FOR DELIVERY in Leonida, Florida"
- Bottom: "GTA 6 STILL SHIPPING. THE GHOST ALREADY GOT PAID."

## The post

It went out on X from [@NanaMontage](https://x.com/NanaMontage):

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
