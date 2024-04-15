import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const multipleOf = (value: number): Assertion<number> =>
	assert((v) => !((v as number) % value), "multipleOf", value);
