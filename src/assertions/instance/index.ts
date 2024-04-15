import { assert } from "@assertions/assert";
import type { Assertion, Class } from "@the-minimal/types";

export const instance = <$Type>(cls: Class<$Type>): Assertion<$Type> =>
	assert((value) => value instanceof cls, "instance", cls);
