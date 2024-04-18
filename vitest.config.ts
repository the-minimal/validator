import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    isolate: true,
    coverage: {
      provider: "v8",
      include: ["src/**/index.ts"],
      exclude: ["src/index.ts", "src/assertions/index.ts"],
      reporter: ["text", "html", "clover", "json", "json-summary"]
    }
  },
});
