import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const minValue = (value: number) =>
	validate<unknown>((v) => (v as any) >= value, "minValue", value);
