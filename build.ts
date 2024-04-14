import { build, gzipSync, deflateSync, file } from "bun";
import { readdir } from "node:fs/promises";

const outdir = './build';

await build({
  entrypoints: ["src/index.ts"],
  outdir,
  minify: true,
  splitting: false,
  target: "browser",
  format: "esm"
});

const outFiles = await readdir(outdir);
const filesLegth = outFiles.length;

for(let i = 0; i < filesLegth; ++i) {
  const fileName = outFiles[i];
  const fileHandler = file(`${outdir}/${fileName}`);
  const arrBuffer = await fileHandler.arrayBuffer();
  const raw = new Uint8Array(arrBuffer);
  const gzip = gzipSync(raw);
  const deflate = deflateSync(raw);

  console.log(`${fileName} - ${raw.byteLength} | ${gzip.byteLength} | ${deflate.byteLength}`);
}
