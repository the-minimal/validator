import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const maxValue = (value: number): Assertion<any> =>
	assert(
		(v) => (v as any) <= value,
		() => `Not max value ${value}`,
	);
