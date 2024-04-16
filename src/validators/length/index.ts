import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const length = (value: number) =>
	validate<string | unknown[]>(
		(v) => (v as string | unknown[]).length === value,
		"length",
		value,
	);
