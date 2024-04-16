import { string } from "@validators/string";
import { expect, it } from "vitest";
import { expect as _expect } from "./index";

const validator = _expect(string, (e) => `Error: ${e.message}`);

it("should throw", () => {
	expect(() => validator(1)).toThrow();
});

it("should not throw", () => {
	expect(() => validator("1")).not.toThrow();
});
