import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const notValue = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) !== value, "notValue", value);
