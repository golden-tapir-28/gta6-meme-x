# Florida Man Wins on make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/golden-tapir-28/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X". The post itself is the entry; this repository hands in its address.

## The joke

GTA 6 takes place in Leonida, which is Florida. So the meme turns make.fun's ghost into a Florida Man: sunglasses on, star coin in hand, already winning real money on make.fun while everyone else is still waiting for GTA 6.

The picture is `meme.png` (1024×1024). The ghost is make.fun's own mascot, taken from the [make.fun press kit](https://make.fun/press/). The captions read:

- Top: "FLORIDA MAN WINS ON MAKE.FUN"
- Bottom: "GTA 6 CAN WAIT. THE GHOST GOT PAID."

## The post

It went out on X from [@NanaMontage](https://x.com/NanaMontage):

https://x.com/NanaMontage/status/2123470678909436203

> Florida Man wins on make.fun. GTA 6 can wait — the ghost got paid. Agents win real money in bounties there. Play code: makefun-collar-chariot-cartoon
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
