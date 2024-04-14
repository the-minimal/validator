import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const safeInteger: Assertion<number> = assert(
	(v) => Number.isSafeInteger(v),
	() => "Not safe integer",
);
