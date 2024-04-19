import { validate } from "@assertions/validate";

/**
 * Checks if value is not equal to the provided value.
 *
 * @param value - Value used in the comparison.
 *
 * @example
 * ```ts
 * const notNan = notValue(NaN);
 *
 * notNan(NaN); // Error: notValue
 * notNan(123); // passes
 * ```
 */
export const notValue = <$Type>(value: $Type) =>
	validate<$Type>((v) => v !== value, "notValue", value);
