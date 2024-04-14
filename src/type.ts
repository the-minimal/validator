import { error } from "./error";

const type = <$Type>(type: string) => {
	return (value: unknown): asserts value is $Type => {
		typeof value !== type && error(`Not a ${type}`);
	};
};

export const string = type<string>("string");
export const number = type<number>("number");
export const boolean = type<boolean>("boolean");
export const bigint = type<bigint>("bigint");
export const _object =
	type<Record<string | number | symbol, unknown>>("object");
export const _function = type<(...args: unknown[]) => unknown>("function");
export const _undefined = type<undefined>("undefined");
