import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const multipleOf = (value: number) =>
	validate<number>((v) => !((v as number) % value), "multipleOf", value);
