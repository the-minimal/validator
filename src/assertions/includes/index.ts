import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const includes = (value: string): Assertion<string | unknown[]> =>
	assert((v) => (v as string | unknown[]).includes(value), "includes", value);
