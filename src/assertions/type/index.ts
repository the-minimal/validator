import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const type = <$Type>(type: string): Assertion<$Type> =>
	assert((value) => typeof value === type, "type", type);
