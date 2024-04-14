import { expect, it } from "bun:test";
import { string } from "@assertions/string";
import { expect as _expect } from "./index";

const validation = _expect(string, (e) => `Error: ${e.message}`);

it("should throw custom message on invalid value", () => {
	expect(() => validation(1)).toThrow();
});

it("should not throw custom message on valid value", () => {
	expect(() => validation("1")).not.toThrow();
});