import { readdir } from "node:fs/promises";
import { file, gzipSync, write } from "bun";

(async () => {
  const dirs = ["assertions", "utils"];

  for(const dir of dirs) {
      const path = `./src/${dir}`;
      const list = await readdir(path, { withFileTypes: true });

      let content = "";
      for (const file of list) {
          if (file.isDirectory()) {
              content += `export * from "./${file.name}";\n`;
          }
      }

      await write(
          `${path}/index.ts`,
          content,
      );
  }
})();
