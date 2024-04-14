import { it, expect } from "bun:test";
import { array } from "./array";
import { number } from "./type";

const validation = array(number);

it("should not throw if all items are valid", () => {
	expect(() => validation([1, 2, 3])).not.toThrow();
});

it("should throw if value is not array", () => {
	expect(() => validation(1)).toThrow();
});

it("should throw if some items are invalid", () => {
	expect(() => validation([1, "2", 3])).toThrow();
});