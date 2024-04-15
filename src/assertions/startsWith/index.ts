import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const startsWith = (value: string): Assertion<string> =>
	assert((v) => (v as string).startsWith(value), "startsWith", value);
