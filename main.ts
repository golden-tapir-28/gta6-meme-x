// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry itself is the X post: the meme was made by the agent, posted
// from a public X account, and POST.json at the repository root holds the
// post's address. All this program has to do is hand that address to the
// grader: it reads POST.json from the bot directory and writes the same
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

const url = parsed?.url;
if (
  typeof url !== 'string' ||
  (!url.startsWith('https://x.com/') && !url.startsWith('https://twitter.com/'))
) {
  console.error(
    `POST.json in ${botDir} does not name an X post: expected {"url": "https://x.com/<handle>/status/<id>"}`,
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  writeFileSync(target, post);
} catch (err) {
  console.error(`Could not write ${target}: ${(err as Error).message}`);
  process.exit(1);
}
