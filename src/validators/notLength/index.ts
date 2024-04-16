import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const notLength = (value: number) =>
	validate<string | Array<unknown>>(
		(v) => (v as string | unknown[]).length !== value,
		"notLength",
		value,
	);
