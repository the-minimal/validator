import { validate } from "@validators/validate";

export const lEq = (value: number) =>
	validate<string | Array<unknown>>(
		(v) => (v as string | Array<unknown>).length === value,
		"length",
		value,
	);
