import { and2 } from "@assertions/and2";
import { number } from "@assertions/number";
import { object } from "@assertions/object";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<{ a: string } & { b: number }>>(
	and2(object({ a: string }), object({ b: number })),
);
