import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const minValue = (value: number): Assertion<any> =>
	assert((v) => (v as any) >= value, "minValue", value);
