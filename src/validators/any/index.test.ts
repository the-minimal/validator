import { any } from "@validators/any";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => any(2)).not.toThrow();
});
