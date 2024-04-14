import { expect, it } from "bun:test";
import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { tuple } from "./index";

const validation = tuple([string, number, boolean]);

it("should not throw if all items are valid", () => {
	expect(() => validation(["1", 1, true])).not.toThrow();
});

it("should throw if some items are invalid", () => {
	expect(() => validation(["1", "1", true])).toThrow();
});

it("should throw if value is not array", () => {
	expect(() => validation(1)).toThrow();
});
