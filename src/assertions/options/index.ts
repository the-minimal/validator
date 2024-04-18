import { validate } from "@assertions/validate";

export const options = <const $Options extends unknown[]>(options: $Options) =>
	validate<$Options[number]>((v) => options.includes(v), "options", options);
