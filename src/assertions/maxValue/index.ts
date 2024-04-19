import { validate } from "@assertions/validate";

/**
 * Checks if value is less than or equal to the provided length.
 *
 * @param value - Value used in the comparison.
 *
 * @example
 * ```ts
 * const teenagerAge = maxValue(17);
 *
 * teenagerAge(26); // Error: maxValue
 * teenagerAge(15); // passes
 * ```
 */
export const maxValue = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) <= value, "maxValue", value);
