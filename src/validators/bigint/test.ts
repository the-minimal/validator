import { bigint } from "@validators/bigint";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => bigint(BigInt(2))).not.toThrow();
});

it("should throw", () => {
	expect(() => bigint(2)).toThrow();
});
