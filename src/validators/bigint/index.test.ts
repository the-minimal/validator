import { bigint } from "@validators/bigint";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => bigint(BigInt(2))).not.toThrow();
	expect(() => bigint(2)).toThrow();
});
