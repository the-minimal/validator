import { number } from "@assertions/number";
import { validate } from "@assertions/validate";
import { expect, test } from "vitest";
import { and3 } from "./index";

const lte = (value: number) =>
	validate<number>((v) => (v as any) <= value, "lte");
const gte = (value: number) =>
	validate<number>((v) => (v as any) >= value, "gte");

const assertion = and3(number, gte(0), lte(2));

test(() => {
	expect(() => assertion(2)).not.toThrow();
	expect(() => assertion("")).toThrow();
	expect(() => assertion(-1)).toThrow();
	expect(() => assertion(3)).toThrow();
});
