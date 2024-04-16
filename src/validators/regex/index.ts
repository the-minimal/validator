import { assert } from "@validators/assert";

export const regex = (pattern: RegExp) =>
	assert((v) => pattern.test(v as any), "regex", pattern);
