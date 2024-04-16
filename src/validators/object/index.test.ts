import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { expect, it, test } from "vitest";
import { object } from "./index";

const validator = object({
	name: string,
	age: number,
	admin: boolean,
});

test(() => {
	expect(() =>
		validator({
			name: "yamiteru",
			age: 26,
			admin: true,
		}),
	).not.toThrow();

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
