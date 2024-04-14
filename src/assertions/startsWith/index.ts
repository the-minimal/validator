import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const startsWith = (value: string): Assertion<string> =>
	assert(
		(v) => (v as string).startsWith(value),
		() => `Not starts with ${value}`,
	);
