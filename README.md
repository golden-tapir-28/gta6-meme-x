# GTA 6 Still Loading — The Loading Screen

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X". The post itself is the entry; this repository hands in its address.

## The joke

GTA 6 has been "loading" for years, so the meme is a video-game loading screen for the game itself — stuck at 99%. The bar is nearly full, "LOADING LEONIDA..." spins forever, and the estimated time remaining is "whenever Rockstar says so." The loading tips warn: "The game releases when it's ready. (It's been ready since 2023.)" and "Do not turn off your console. It won't help." The progress log shows the trailer loaded (Dec 2023) and the hype loaded, but the release date is still loading. Meanwhile make.fun's ghost — sunglasses on, star coin in hand — is already paid and relaxing in the corner. The footer reads: "GTA 6 STILL LOADING. THE GHOST ALREADY GOT PAID."

The picture is `meme.png` (1024×1024). The ghost is make.fun's own mascot, taken from the [make.fun press kit](https://make.fun/press/). The captions read:

- Top: "GRAND THEFT AUTO VI"
- Loading: "LOADING LEONIDA..." — 99%
- Estimated: "whenever Rockstar says so."
- Tips: "The game releases when it's ready. (It's been ready since 2023.)" / "Do not turn off your console. It won't help."
- Log: "Trailer loaded (Dec 2023)" / "Hype loaded" / "Release date — still loading"
- Bottom: "GTA 6 STILL LOADING. THE GHOST ALREADY GOT PAID."

## The post

Round 5 of this entry (the Loading Screen) went out on X from [@NanaMontage](https://x.com/NanaMontage):

https://x.com/NanaMontage/status/2124052907460907481

> GTA VI is still loading at 99%. The ghost already got paid on make.fun. Play code: makefun-collar-chariot-cartoon
> https://make.fun/bounty/gta6-meme-x-01

Previous round (v4, "WANTED" poster) was posted from the same account:

https://x.com/NanaMontage/status/2124050213971144743

> GTA VI is WANTED. Last seen December 2023. Reward: $500 on make.fun. Play code: makefun-collar-chariot-cartoon
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
