import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: ["src/**/test.ts"],
    isolate: true,
    coverage: {
      provider: "v8"
    }
  },
});
