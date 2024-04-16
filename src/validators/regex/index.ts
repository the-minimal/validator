import { validate } from "@validators/validate";

export const regex = (pattern: RegExp) =>
	validate<string>((v) => pattern.test(v as any), "regex", pattern);
