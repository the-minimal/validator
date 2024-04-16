import { expect, it } from "bun:test";
import { endsWith } from "@validators/endsWith/index";

const validator = endsWith("lo");

it("should not throw", () => {
	expect(() => validator("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
