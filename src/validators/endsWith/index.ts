import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const endsWith = (value: string): Assertion<string> =>
	assert((v) => (v as string).endsWith(value), "endsWith", value);
