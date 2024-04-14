import { expect, it } from "bun:test";
import { boolean, number, string } from "./index";

it("should not throw on valid types", () => {
	expect(() => string("a")).not.toThrow();
	expect(() => number(1)).not.toThrow();
	expect(() => boolean(true)).not.toThrow();
});

it("should throw on invalid types", () => {
	expect(() => string({})).toThrow();
	expect(() => number({})).toThrow();
	expect(() => boolean({})).toThrow();
});
