import { error } from "./error";
import type { Class } from "./types";

export const instance = <$Type>(cls: Class<$Type>) => {
	return function (value: unknown): asserts value is $Type {
		!(value instanceof cls) && error(`Not instance of ${cls}`);
	};
};

export const date = instance(Date);
