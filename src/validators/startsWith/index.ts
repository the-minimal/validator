import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const startsWith = (value: string): Assertion<string> =>
	assert((v) => (v as string).startsWith(value), "startsWith", value);
