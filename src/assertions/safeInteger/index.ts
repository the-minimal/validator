import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const safeInteger: Assertion<number> = assert(
	Number.isSafeInteger,
	"safeInteger",
);
