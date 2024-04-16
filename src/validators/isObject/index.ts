import type { ObjectUnknown } from "@validators/isObject/types";
import { validate } from "@validators/validate";

export const isObject = validate<ObjectUnknown>(
	(v) => v !== null && typeof v === "object",
	"isObject",
);
