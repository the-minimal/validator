import { and3 } from "@assertions/and3";
import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { object } from "@assertions/object";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<{ a: string } & { b: number } & { c: boolean }>>(
	and3(object({ a: string }), object({ b: number }), object({ c: boolean })),
);
