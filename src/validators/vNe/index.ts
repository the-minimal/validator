import { validate } from "@validators/validate";

export const vNe = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) !== value, "vNe", value);
