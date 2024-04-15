import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const isArray: Assertion<Array<unknown>> = assert(
	Array.isArray,
	"isArray",
);
