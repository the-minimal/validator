import { expect, it } from "bun:test";
import { bigint } from "@validators/bigint/index";

it("should not throw", () => {
	expect(() => bigint(BigInt(2))).not.toThrow();
});

it("should throw", () => {
	expect(() => bigint(2)).toThrow();
});
