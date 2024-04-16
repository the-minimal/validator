import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const includes = (value: string) =>
	validate<string | unknown[]>(
		(v) => (v as string | unknown[]).includes(value),
		"includes",
		value,
	);
