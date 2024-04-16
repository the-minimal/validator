import type { Assertion } from "@the-minimal/types";
import type { ObjectUnknown } from "@types";
import { assert } from "@validators/assert";

export const isObject: Assertion<ObjectUnknown> = assert(
	(v) => v !== null && typeof v === "object",
	"isObject",
);
