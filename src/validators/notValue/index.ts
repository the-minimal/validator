import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const notValue = (value: number): Assertion<any> =>
	assert((v) => (v as any) !== value, "notValue", value);
