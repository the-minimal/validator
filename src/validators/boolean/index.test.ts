import { boolean } from "@validators/boolean";
import { expect, test } from "vitest";

test(() => {
	expect(() => boolean(true)).not.toThrow();
	expect(() => boolean(false)).not.toThrow();
	expect(() => boolean(1)).toThrow();
});
