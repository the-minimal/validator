import { it, expect } from "bun:test";
import { string } from "./type";
import { expect as _expect } from "./expect";

const validation = _expect(string, (e) => `Error: ${e.message}`);

it("should throw custom message on invalid value", () => {
	expect(() => validation(1)).toThrow();	
});

it("should not throw custom message on valid value", () => {
	expect(() => validation("1")).not.toThrow();	
});
