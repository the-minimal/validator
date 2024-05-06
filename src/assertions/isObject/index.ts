import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error/index.js";

/**
 * Checks that the value is of type object and is not null.
 *
 * @example
 * ```ts
 * isObject(1); // Error: isObject
 * isObject(null); // Error: isObject
 * isObject({}); // passes
 * ```
 */
export const isObject: Assertion<Record<string, unknown>> = (v: unknown) =>
	(v !== null && typeof v === "object") || ValidationError(isObject);
