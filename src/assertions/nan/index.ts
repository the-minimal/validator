import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const nan: Assertion<number> = assert(
	(v) => Number.isNaN(v),
	() => "Not NaN",
);
