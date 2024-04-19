import { validate } from "@assertions/validate";

/**
 * Checks if value is equal to the provided value.
 *
 * @param value - Value used in the comparison.
 *
 * @example
 * ```ts
 * const isNull = value(null);
 *
 * isNull(""); // Error: value
 * isNull(null); // passes
 * ```
 */
export const value = <$Type>(value: $Type) =>
	validate<$Type>((v) => v === value, "value", value);
