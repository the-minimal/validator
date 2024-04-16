import { validate } from "@validators/validate";

export const options = <$Options extends unknown[]>(options: $Options) =>
	validate<$Options[number]>((v) => options.includes(v), "options", options);
