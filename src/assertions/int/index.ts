import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const int: Assertion<number> = assert(
	(v) => Number.isInteger(v),
	() => "Not integer",
);
