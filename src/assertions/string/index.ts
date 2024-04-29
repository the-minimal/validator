import { type } from "@assertions/type";
import type { Validate } from "./types";

/**
 * Checks that the value is a string.
 *
 * @example
 * ```ts
 * string(1); // Error: type
 * string("hello"); // passes
 * ```
 */
export const string = type("string") as Validate.Type.String;
