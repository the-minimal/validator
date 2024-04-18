import type { Assertion } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const isArray: Assertion<Array<unknown>> = validate<Array<unknown>>(
	Array.isArray,
	"isArray",
);
