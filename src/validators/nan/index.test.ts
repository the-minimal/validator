import { nan } from "@validators/nan";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => nan(Number.NaN)).not.toThrow();
	expect(() => nan(1)).toThrow();
});
