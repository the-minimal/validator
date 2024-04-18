import { validate } from "@assertions/validate";
import type { Assertion } from "@the-minimal/types";

export const isArray: Assertion<Array<unknown>> = validate<Array<unknown>>(
	Array.isArray,
	"isArray",
);
