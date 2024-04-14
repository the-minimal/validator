import { expect, it } from "bun:test";
import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { object } from "./index";

const validation = object({
	name: string,
	age: number,
	admin: boolean,
});

it("should not throw if value is valid", () => {
	expect(() =>
		validation({
			name: "yamiteru",
			age: 26,
			admin: true,
		}),
	).not.toThrow();
});

it("should throw if value is null", () => {
	expect(() => validation(null)).toThrow();
});

it("should throw if value is not object", () => {
	expect(() => validation([])).toThrow();
});

it("should throw if some keys are missing", () => {
	expect(() =>
		validation({
			name: "yamiteru",
			age: 26,
		}),
	).toThrow();
});

it("should throw if some values are invalid", () => {
	expect(() =>
		validation({
			name: "yamiteru",
			age: 26,
			admin: "yes",
		}),
	).toThrow();
});
