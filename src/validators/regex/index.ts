import { assert } from "@validators/assert";

export const regex = (pattern: RegExp) =>
	assert(pattern.test as any, "regex", pattern);
