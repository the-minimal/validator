import { validate } from "@validators/validate";

export const maxValue = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) <= value, "maxValue", value);
