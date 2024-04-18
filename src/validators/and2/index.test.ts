import { number } from "@validators/number";
import { validate } from "@validators/validate";
import { expect, it, test } from "vitest";
import { and2 } from "./index";

const lte = (value: number) =>
	validate<number>((v) => (v as any) <= value, "lte");

const validator = and2(number, lte(2));

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator("")).toThrow();
	expect(() => validator(3)).toThrow();
});
