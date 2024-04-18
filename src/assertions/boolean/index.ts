import { type } from "@assertions/type";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks that the value is a boolean.
 *
 * @example
 * ```ts
 * boolean(1); // Error: type
 * boolean(true); // passes
 * ```
 */
export const boolean: Assertion<boolean> = type<boolean>("boolean");
