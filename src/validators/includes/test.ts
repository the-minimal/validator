import { expect, it } from "bun:test";
import { includes } from "@validators/includes/index";

const validator = includes("el");

it("should not throw", () => {
	expect(() => validator("hello")).not.toThrow();
});

it("should throw", () => {
	expect(() => validator("ahoj")).toThrow();
});
