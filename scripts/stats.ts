import { readdir } from "node:fs/promises";
import { file, gzipSync } from "bun";

(async () => {
  const outdir ="./dist";
  const outFiles = await readdir(outdir);
  const filesLength = outFiles.length;

  for (let i = 0; i < filesLength; ++i) {
    const fileName = outFiles[i];

    if(fileName.endsWith(".js")) {
      const fileHandler = file(`${outdir}/${fileName}`);
      const arrBuffer = await fileHandler.arrayBuffer();
      const gzip = gzipSync(arrBuffer);

      console.log(`${fileName} - ${gzip.byteLength} B`);
    }
  }
})();
