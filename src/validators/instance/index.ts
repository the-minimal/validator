import type { Assertion, Class } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const instance = <$Type>(cls: Class<$Type>): Assertion<$Type> =>
	assert((value) => value instanceof cls, "instance", cls);
