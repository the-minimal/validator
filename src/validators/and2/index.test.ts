import { number } from "@validators/number";
import { vLte } from "@validators/vLte";
import { expect, it, test } from "vitest";
import { and2 } from "./index";

const validator = and2(number, vLte(2));

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator("")).toThrow();
	expect(() => validator(3)).toThrow();
});
