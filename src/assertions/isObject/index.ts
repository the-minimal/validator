import { assert } from "@assertions/assert";
import type { Assertion, ObjectUnknown } from "@types";

export const isObject: Assertion<ObjectUnknown> = assert(
	(v) => v !== null && typeof v === "object",
	"isObject",
);
