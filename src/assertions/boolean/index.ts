import { type } from "@assertions/type/index.js";

/**
 * Checks that the value is a boolean.
 *
 * @example
 * ```ts
 * boolean(1); // Error: type
 * boolean(true); // passes
 * ```
 */
export const boolean = type<boolean>("boolean");
