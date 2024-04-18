import { validate } from "@validators/validate";

export const vEq = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as $Type) === value, "value", value);
