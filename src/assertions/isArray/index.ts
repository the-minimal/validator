import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const isArray: Assertion<Array<unknown>> = assert(
	Array.isArray,
	"isArray",
);
