import { error } from "@error";
import type { Validate } from "./types";

/**
 * Checks that the value is an array.
 *
 * @example
 * ```ts
 * isArray(1); // Error: isArray
 * isArray([]); // passes
 * ```
 */
export const isArray = ((v: unknown) =>
	Array.isArray(v) || error(isArray)) as unknown as Validate.Type.Array;
