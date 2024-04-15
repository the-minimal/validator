import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const notValue = (value: number): Assertion<any> =>
	assert((v) => (v as any) !== value, "notValue", value);
