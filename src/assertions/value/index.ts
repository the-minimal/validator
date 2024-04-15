import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const value = (value: number): Assertion<any> =>
	assert((v) => (v as any) === value, "value", value);
