import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const maxLength = (value: number): Assertion<string | unknown[]> =>
	assert(
		(v) => (v as string | unknown[]).length <= value,
		() => `Not max length ${value}`,
	);
