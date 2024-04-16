import { validate } from "@validators/validate";

export const includes = <$Type extends string | Array<unknown>>(value: $Type) =>
	validate<$Type | Array<$Type>>(
		(v) => (v as $Type | Array<$Type>).includes(value as any),
		"includes",
		value,
	);
