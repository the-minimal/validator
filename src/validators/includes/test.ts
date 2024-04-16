import { includes } from "@validators/includes";
import { expect, it } from "vitest";

const validator = includes("el");

it("should not throw", () => {
	expect(() => validator("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
