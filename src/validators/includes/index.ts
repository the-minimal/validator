import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const includes = (value: string): Assertion<string | unknown[]> =>
	assert((v) => (v as string | unknown[]).includes(value), "includes", value);
