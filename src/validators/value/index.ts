import { validate } from "@validators/validate";

export const value = (value: number) =>
	validate<unknown>((v) => (v as any) === value, "value", value);
