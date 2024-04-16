import { expect, it } from "bun:test";
import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { tuple } from "./index";

const validator = tuple([string, number, boolean]);

it("should not throw", () => {
	expect(() => validator(["1", 1, true])).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(["1", "1", true])).toThrow();
	expect(() => validator(1)).toThrow();
});
