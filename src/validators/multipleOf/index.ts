import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const multipleOf = (value: number): Assertion<number> =>
	assert((v) => !((v as number) % value), "multipleOf", value);
