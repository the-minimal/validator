import { startsWith } from "@validators/startsWith";
import { expect, it } from "vitest";

const validator = startsWith("he");

it("should not throw", () => {
	expect(() => validator("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
