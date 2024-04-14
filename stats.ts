import { readdir } from "node:fs/promises";
import { file, gzipSync } from "bun";

(async () => {
  const outdir ="./build";
  const outFiles = await readdir(outdir);
  const filesLegth = outFiles.length;

  for (let i = 0; i < filesLegth; ++i) {
    const fileName = outFiles[i];

    if(fileName.endsWith(".js")) {
      const fileHandler = file(`${outdir}/${fileName}`);
      const arrBuffer = await fileHandler.arrayBuffer();
      const gzip = gzipSync(arrBuffer);

      console.log(`${fileName} - ${gzip.byteLength} B`);
    }
  }
})();
