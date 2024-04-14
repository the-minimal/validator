import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const length = (value: number): Assertion<string | unknown[]> =>
	assert(
		(v) => (v as string | unknown[]).length === value,
		() => `Not length ${value}`,
	);
