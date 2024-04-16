import { validate } from "@validators/validate";

export const endsWith = (value: string) =>
	validate<string>((v) => (v as string).endsWith(value), "endsWith", value);
