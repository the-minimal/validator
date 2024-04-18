import { validate } from "@validators/validate";

export const vLte = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) <= value, "vLte", value);
