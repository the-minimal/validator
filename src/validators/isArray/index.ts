import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const isArray: Assertion<Array<unknown>> = assert(
	Array.isArray,
	"isArray",
);
