import type { Assertion } from "@the-minimal/types";
import { ValidationError } from "@utils/error/index.js";

/**
 * Checks if one of the assertions passes.
 *
 * If none of them passes it throws an error.
 *
 * If you have two or three assertions consider using {@link or2} or {@link or3} respectively.
 *
 * @param assertions - Array of assertions to be checked
 *
 * @example
 * ```ts
 * const trueish = or([literal(1), literal(true), literal("true"), literal("yes")]);
 *
 * trueish("yassss"); // Error: literal
 * trueish(1); // passes
 * trueish(true); // passes
 * trueish("true"); // passes
 * trueish("yes"); // passes
 * ```
 */
export const or =
	<const $Values extends unknown[]>(
		assertions: {
			[$Key in keyof $Values]: Assertion<$Values[$Key]>;
		},
	): Assertion<$Values[number]> =>
	(v: unknown) => {
		for (let i = 0; i < assertions.length; ++i) {
			try {
				(assertions[i] as any)(v);
				return;
			} catch {}
		}

		ValidationError(or);
	};
