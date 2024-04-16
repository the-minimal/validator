import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const minValue = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) >= value, "minValue", value);
