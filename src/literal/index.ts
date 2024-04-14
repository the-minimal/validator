import { assert } from "../assert";
import type { Assertion } from "../types";

export const literal = <$Value>(value: $Value): Assertion<$Value> =>
	assert(
		(v) => v === value,
		(v) => `${v} !== ${value}`,
	);
