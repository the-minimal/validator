import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const length = (value: number) =>
	validate<string | Array<unknown>>(
		(v) => (v as string | Array<unknown>).length === value,
		"length",
		value,
	);
