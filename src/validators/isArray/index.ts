import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate";

export const isArray = validate<Array<unknown>>(Array.isArray, "isArray");
