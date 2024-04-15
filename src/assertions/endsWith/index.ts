import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const endsWith = (value: string): Assertion<string> =>
	assert((v) => (v as string).endsWith(value), "endsWith", value);
