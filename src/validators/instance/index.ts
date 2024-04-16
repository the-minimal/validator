import type { Class, Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const instance = <$Type>(cls: Class<$Type>) =>
	validate<$Type>((value) => value instanceof cls, "instance", cls);
