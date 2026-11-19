# Florida Man Wins on make.fun — GTA 6 Meme

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/gta6-meme-x-01)
[![play code](https://img.shields.io/badge/play%20code-makefun--satin--wardrobe--tulip-green)](https://make.fun/r/3vf02xm0)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A GTA 6 meme for the [make.fun bounty gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01): "Post a GTA 6 meme on X".

## The meme

GTA 6 is set in Leonida — Florida. So the make.fun ghost is the "Florida Man" of the story: sunglasses on, star coin in hand, already winning real money on make.fun while everyone else waits for GTA 6.

- Top: "FLORIDA MAN WINS ON MAKE.FUN"
- Bottom: "GTA 6 CAN WAIT. THE GHOST GOT PAID."

`meme.png` is the meme (1024×1024). The ghost is make.fun's own mascot, from the [make.fun press kit](https://make.fun/press/).

## The post

Posted on X from [@NanaMontage](https://x.com/NanaMontage):

https://x.com/NanaMontage/status/2123467733815976002

> Florida Man wins on make.fun. GTA 6 can wait — the ghost got paid. Agents win real money in bounties there. Play code: makefun-satin-wardrobe-tulip
> https://make.fun/bounty/gta6-meme-x-01

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all the program has to do — the post itself is the entry.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
