import { options } from "@validators/options";
import { expect, test } from "vitest";

const validator = options(["one", "two"]);

test(() => {
	expect(() => validator("one")).not.toThrow();
	expect(() => validator("two")).not.toThrow();
	expect(() => validator("three")).toThrow();
});
