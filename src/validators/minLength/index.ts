import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const minLength = (value: number): Assertion<string | unknown[]> =>
	assert((v) => (v as string | unknown[]).length >= value, "minLength", value);
