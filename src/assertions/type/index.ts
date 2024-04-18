import { validate } from "@assertions/validate";

/**
 * Checks that the value is of the provided type.
 *
 * @param type - Type to be validated against.
 *
 * @example
 * ```ts
 * const string = type<string>("string");
 *
 * string(1); // Error: type
 * string("hello"); // passes
 * ```
 */
export const type = <$Type>(type: string) =>
	validate<$Type>((value) => typeof value === type, "type", type);
