import { error } from "./error";

export const literal = <$Value>(value: $Value) => {
	return function (v: unknown): asserts v is $Value {
		v !== value && error(`${v} !== ${value}`);
	};
};
