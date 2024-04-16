import { endsWith } from "@validators/endsWith";
import { expect, it } from "vitest";

const validator = endsWith("lo");

it("should not throw", () => {
	expect(() => validator("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
