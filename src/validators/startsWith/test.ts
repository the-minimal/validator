import { expect, it } from "bun:test";
import { startsWith } from "@validators/startsWith/index";

const validator = startsWith("he");

it("should not throw", () => {
	expect(() => validator("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
