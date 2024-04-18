import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const vGte = <$Type>(value: $Type) =>
	validate<$Type>((v) => (v as any) >= value, "vGte", value);
