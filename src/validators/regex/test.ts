import { expect, it } from "bun:test";
import { regex } from "@validators/regex/index";

const validator = regex(/^\d+$/);

it("should not throw", () => {
	expect(() => validator("123")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
