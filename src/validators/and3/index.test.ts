import { number } from "@validators/number";
import { validate } from "@validators/validate";
import { expect, test } from "vitest";
import { and3 } from "./index";

const lte = (value: number) =>
	validate<number>((v) => (v as any) <= value, "lte");
const gte = (value: number) =>
	validate<number>((v) => (v as any) >= value, "gte");

const validator = and3(number, gte(0), lte(2));

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator("")).toThrow();
	expect(() => validator(-1)).toThrow();
	expect(() => validator(3)).toThrow();
});
