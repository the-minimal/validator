import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const minLength = (value: number): Assertion<string | unknown[]> =>
	assert((v) => (v as string | unknown[]).length >= value, "minLength", value);
