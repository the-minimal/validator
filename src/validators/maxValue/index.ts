import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const maxValue = (value: number) =>
	validate<unknown>((v) => (v as any) <= value, "maxValue", value);
