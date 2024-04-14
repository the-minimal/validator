import { assert } from "../assert";
import type { Assertion, Class } from "../types";

export const instance = <$Type>(cls: Class<$Type>): Assertion<$Type> =>
	assert(
		(value) => value instanceof cls,
		() => `Not instance of ${cls.name}`,
	);

export const date = instance(Date);
