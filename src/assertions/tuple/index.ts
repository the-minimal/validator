import { isArray } from "@assertions/isArray";
import type { TupleSchema, Validate } from "./types";

/**
 * Checks that assertion passes for each element of the tuple.
 *
 * @param assertions - Tuple schema to be checked.
 *
 * @example
 * ```ts
 * const position = tuple([number, number]);
 *
 * position(1); // Error: isArray
 * position([1, "2"]) // Error: type
 * position([1, 2]) // passes
 * ```
 */
export const tuple = <const $Schema extends TupleSchema>(assertions: $Schema) =>
	((v: unknown) => {
		isArray(v);

		for (let i = 0; i < assertions.length; ++i) {
			(assertions[i] as any)(v[i]);
		}
	}) as unknown as Validate.Tuple<$Schema>;
