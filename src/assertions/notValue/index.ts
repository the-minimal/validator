import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const notValue = (value: number): Assertion<any> =>
	assert(
		(v) => (v as any) !== value,
		() => `Value ${value}`,
	);
