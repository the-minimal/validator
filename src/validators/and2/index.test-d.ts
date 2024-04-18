import type { Assertion } from "@the-minimal/types";
import { and2 } from "@validators/and2";
import { number } from "@validators/number";
import { object } from "@validators/object";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<{ a: string } & { b: number }>>(
	and2(object({ a: string }), object({ b: number })),
);
