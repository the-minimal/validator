import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { expect, test } from "vitest";
import { object } from "./index";

const assertion = object({
	name: string,
	age: number,
	admin: boolean,
});

test(() => {
	expect(() =>
		assertion({
			name: "yamiteru",
			age: 26,
			admin: true,
		}),
	).not.toThrow();

	expect(() => assertion(null)).toThrow();
	expect(() => assertion([])).toThrow();

	expect(() =>
		assertion({
			name: "yamiteru",
			age: 26,
		}),
	).toThrow();

	expect(() =>
		assertion({
			name: "yamiteru",
			age: 26,
			admin: "yes",
		}),
	).toThrow();
});
