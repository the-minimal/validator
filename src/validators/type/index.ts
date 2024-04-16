import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const type = <$Type>(type: string): Assertion<$Type> =>
	assert((value) => typeof value === type, "type", type);
