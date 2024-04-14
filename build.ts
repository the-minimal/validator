import { build } from "bun";

await build({
	entrypoints: ["src/index.ts"],
	outdir: "./build",
	minify: true,
	splitting: false,
	target: "browser",
	format: "esm",
  sourcemap: "external"
});

