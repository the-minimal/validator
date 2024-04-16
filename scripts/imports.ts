import { readdir } from "node:fs/promises";
import { write } from "bun";

(async () => {
  const dirs = ["validators"];

  for(const dir of dirs) {
      const path = `./src/${dir}`;
      const list = await readdir(path, { withFileTypes: true });

      list.sort((a, b) => a.name.localeCompare(b.name));

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
