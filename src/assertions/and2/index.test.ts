import { number } from "@assertions/number";
import { validate } from "@assertions/validate";
import { expect, test } from "vitest";
import { and2 } from "./index";

const lte = (value: number) =>
	validate<number>((v) => (v as any) <= value, "lte");

const assertion = and2(number, lte(2));

test(() => {
	expect(() => assertion(2)).not.toThrow();
	expect(() => assertion("")).toThrow();
	expect(() => assertion(3)).toThrow();
});
