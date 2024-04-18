import type { Assertion } from "@the-minimal/types";
import type { ObjectUnknown } from "@validators/isObject/types";
import { validate } from "@validators/validate";

export const isObject: Assertion<ObjectUnknown> = validate<ObjectUnknown>(
	(v) => v !== null && typeof v === "object",
	"isObject",
);
