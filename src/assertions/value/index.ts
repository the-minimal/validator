import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const value = (value: number): Assertion<any> =>
	assert((v) => (v as any) === value, "value", value);
