import { assert } from "@assertions/assert";

export const regex = (pattern: RegExp) =>
	assert(
		(value) => pattern.test(value as string),
		() => `Not a ${pattern}`,
	);
