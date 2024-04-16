import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const notLength = (value: number) =>
	validate<string | unknown[]>(
		(v) => (v as string | unknown[]).length !== value,
		"notLength",
		value,
	);
