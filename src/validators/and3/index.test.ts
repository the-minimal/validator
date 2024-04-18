import { number } from "@validators/number";
import { vGte } from "@validators/vGte";
import { vLte } from "@validators/vLte";
import { expect, it, test } from "vitest";
import { and3 } from "./index";

const validator = and3(number, vGte(0), vLte(2));

test(() => {
	expect(() => validator(2)).not.toThrow();
	expect(() => validator("")).toThrow();
	expect(() => validator(-1)).toThrow();
	expect(() => validator(3)).toThrow();
});
