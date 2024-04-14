import { error } from "./error";

const type = <$Type>(type: string) => {
	return (value: unknown): asserts value is $Type => {
		typeof value !== type && error(`Not a ${type}`);
	};
};

export const string = type<string>("string");
export const number = type<number>("number");
export const boolean = type<boolean>("boolean");
