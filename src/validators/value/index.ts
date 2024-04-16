import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const value = (value: number): Assertion<any> =>
	assert((v) => (v as any) === value, "value", value);
