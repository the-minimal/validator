import { unknown } from "@validators/unknown";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => unknown(1)).not.toThrow();
});
