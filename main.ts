import { mkdirSync, writeFileSync } from "node:fs";

// A robot's two-line apology: the exact slip, then the changed behaviour.
const lines = [
  "I'm sorry I read out 'Surprise party for Dana, don't tell Dana' when you asked what was on Saturday, while Dana was standing right behind you.",
  "I've learned that who is listening matters as much as what is asked, so from now on I say 'one private event' whenever I hear a second voice in the room.",
];
const text = lines.join("\n");

const chars = [...text].length;
if (chars < 1 || chars > 400) throw new Error(`entry is ${chars} characters; the limit is 400`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text);
