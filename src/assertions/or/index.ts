import { error } from "@error";
import type {
	Assertion,
	InferAssertion,
	UnknownAssertion,
} from "@the-minimal/types";

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
	<const $Assertions extends UnknownAssertion[]>(
		assertions: $Assertions,
	): Assertion<
		{
			[$Key in keyof $Assertions]: InferAssertion<$Assertions[$Key]>;
		}[number]
	> =>
	(v: unknown) => {
		for (let i = 0; i < assertions.length; ++i) {
			try {
				(assertions[i] as any)(v);
				return;
			} catch {}
		}

		error(or);
	};
