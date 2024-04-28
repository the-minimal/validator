import { error } from "@error";
import type { UnionSchema, Validate } from "./types";

/**
 * Checks if the value is one of the provided options.
 *
 * @param options - Options to be validated against.
 *
 * @example
 * ```ts
 * const userRole = union(["admin", "user"]);
 *
 * userRole("super-admin"); // Error: union
 * userRole("admin"); // passes
 * userRole("user"); // passes
 * ```
 */
export const union = <const $Schema extends UnionSchema>(options: $Schema) =>
	((v: unknown) =>
		options.includes(v) || error(union)) as unknown as Validate.Union<$Schema>;
