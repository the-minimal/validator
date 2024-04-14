import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const type = <$Type>(type: string): Assertion<$Type> =>
	assert(
		(value) => typeof value === type,
		() => `Not a ${type}`,
	);