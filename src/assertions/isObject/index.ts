import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";
import type { ObjectUnknown } from "@types";

export const isObject: Assertion<ObjectUnknown> = assert(
	(v) => v !== null && typeof v === "object",
	"isObject",
);
