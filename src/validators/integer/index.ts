import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const integer = validate<number>(Number.isInteger, "integer");
