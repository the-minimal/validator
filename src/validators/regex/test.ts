import { regex } from "@validators/regex";
import { expect, it } from "vitest";

const validator = regex(/^\d+$/);

it("should not throw", () => {
	expect(() => validator("123")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
