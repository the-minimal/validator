import { type } from "@assertions/type";
import type { Validate } from "./types";

/**
 * Checks that the value is a boolean.
 *
 * @example
 * ```ts
 * boolean(1); // Error: type
 * boolean(true); // passes
 * ```
 */
export const boolean = type("boolean") as Validate.Type.Boolean;
