import { expect, it } from "bun:test";
import { tuple } from "./tuple";
import { boolean, number, string } from "./type";

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
