import { assert } from "../assert";
import type { Assertion, FunctionUnknown, ObjectUnknown } from "../types";

const type = <$Type>(type: string): Assertion<$Type> =>
	assert(
		(value) => typeof value === type,
		() => `Not a ${type}`,
	);

export const string = type<string>("string");
export const number = type<number>("number");
export const boolean = type<boolean>("boolean");
export const bigint = type<bigint>("bigint");
export const _object = type<ObjectUnknown>("object");
export const _function = type<FunctionUnknown>("function");
export const _undefined = type<undefined>("undefined");
