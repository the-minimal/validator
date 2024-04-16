import { validate } from "@validators/validate";

export const isArray = validate<Array<unknown>>(Array.isArray, "isArray");
