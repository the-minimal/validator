import type { InferOrSchema, OrSchema } from "@assertions/or/types";
import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

/**
 * Checks if one of the assertions passes.
 *
 * If none of them passes it throws an error.
 *
 * If you have two or three assertions consider using {@link or2} or {@link or3} respectively.
 *
 * @param validations - Array of assertions to be checked
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
	<const $Validations extends OrSchema>(
		validations: $Validations,
	): Assertion<InferOrSchema<$Validations>> =>
	(v) => {
		for (let i = 0; i < validations.length; ++i) {
			try {
				(validations[i] as any)(v);
				return;
			} catch {}
		}

		error(or);
	};
