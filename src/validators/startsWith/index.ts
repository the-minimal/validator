import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const startsWith = (value: string) =>
	validate<string>((v) => (v as string).startsWith(value), "startsWith", value);
