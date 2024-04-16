import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const nan = validate<number>(Number.isNaN, "nan");
