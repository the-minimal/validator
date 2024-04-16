import { REGEX_EMAIL } from "@constants";
import { regex } from "@validators/regex";

export const email = regex(REGEX_EMAIL);
