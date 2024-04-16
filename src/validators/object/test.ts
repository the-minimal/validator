import { expect, it } from "bun:test";
import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { object } from "./index";

const validator = object({
	name: string,
	age: number,
	admin: boolean,
});

it("should not", () => {
	expect(() =>
		validator({
			name: "yamiteru",
			age: 26,
			admin: true,
		}),
	).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(null)).toThrow();
	expect(() => validator([])).toThrow();

	expect(() =>
		validator({
			name: "yamiteru",
			age: 26,
		}),
	).toThrow();

	expect(() =>
		validator({
			name: "yamiteru",
			age: 26,
			admin: "yes",
		}),
	).toThrow();
});
