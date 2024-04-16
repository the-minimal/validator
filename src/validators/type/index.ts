import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const type = <$Type>(type: string): Validation<$Type> =>
	validate((value) => typeof value === type, "type", type);
