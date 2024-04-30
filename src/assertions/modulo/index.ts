import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error";

/**
 * Checks if the remainer is equal to the specified value when the input is divided by the divider.
 *
 * @param divider - Value used for the division.
 * @param remainder - Value that should remain after the division is done.
 *
 * @example
 * ```ts
 * const multipleOfTwo = modulo(2, 0);
 *
 * multipleOfTwo(3); // Error: modulo
 * multipleOfTwo(6); // passes
 * ```
 */
export const modulo =
	(divider: number, remainder: number): Assertion<unknown> =>
	(v: unknown) =>
		<number>v % divider === remainder || ValidationError(modulo);
