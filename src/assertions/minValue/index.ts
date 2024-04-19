import { validate } from "@assertions/validate";

/**
 * Checks if value is greater than or equal to the provided length.
 *
 * @param value - Value used in the comparison.
 *
 * @example
 * ```ts
 * const adultAge = minValue(18);
 *
 * adultAge(15); // Error: minValue
 * adultAge(26); // passes
 * ```
 */
export const minValue = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) >= value, "minValue", value);
