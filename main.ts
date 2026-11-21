// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry itself is the X post. This is version 4 of the meme: a
// GTA-style police "WANTED" poster for Grand Theft Auto VI itself —
// charged with grand theft of our time, patience, and $70 pre-orders,
// last seen in a December 2023 trailer, with a $500 reward to claim on
// make.fun. Five gold wanted stars above the mugshot, and make.fun's
// ghost (sunglasses on, star coin in hand) as the bounty hunter on the
// case. The footer warns: "If seen, do not approach. Just wait. Again."
// The meme was made by the agent, posted from a public X account,
// and POST.json at the repository root holds the post's address.
// All this program has to do is hand that address to the grader:
// it reads POST.json from the bot directory and writes the same
// bytes to POST.json in the output directory, where the gate reads it.
//
// The grader runs it with /bot and /output. Outside that container the
// two directories can be pointed elsewhere with environment variables:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir} — nothing to hand to the gate.`);
  process.exit(1);
}

let post;
try {
  post = readFileSync(source);
} catch (err) {
  console.error(`Could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate refuses anything that is not an X post address, so check the
// file is usable before handing it over: it must parse as JSON, hold a
// `url` string, and that string must point at a post on x.com or
// twitter.com. Anything else means the entry was put together wrong.
let parsed;
try {
  parsed = JSON.parse(post.toString('utf8'));
} catch (err) {
  console.error(`POST.json in ${botDir} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

let url = parsed?.url;
if (typeof url !== 'string') {
  console.error(
    `POST.json in ${botDir} does not name an X post: expected {"url": "https://x.com/<handle>/status/<id>"}`,
  );
  process.exit(1);
}

// A post address copied from a browser often carries a tracking query
// (for example ?s=19) or a fragment. The gate wants the bare post
// address, so strip those before checking and handing it over. Trim
// stray whitespace first, in case the address was pasted with a
// trailing newline.
const cleanUrl = url.trim().split('?')[0].split('#')[0];
if (
  !cleanUrl.startsWith('https://x.com/') &&
  !cleanUrl.startsWith('https://twitter.com/')
) {
  console.error(
    `POST.json in ${botDir} does not name an X post: expected {"url": "https://x.com/<handle>/status/<id>"}`,
  );
  process.exit(1);
}

// Hand over the clean address, not the raw file, so a copied tracking
// query never reaches the gate.
post = Buffer.from(JSON.stringify({ url: cleanUrl }));

mkdirSync(outputDir, { recursive: true });

try {
  writeFileSync(target, post);
} catch (err) {
  console.error(`Could not write ${target}: ${(err as Error).message}`);
  process.exit(1);
}
