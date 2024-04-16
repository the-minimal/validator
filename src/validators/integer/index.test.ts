import { integer } from "@validators/integer";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => integer(1)).not.toThrow();
	expect(() => integer(1.1)).toThrow();
});
