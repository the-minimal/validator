import { REGEX_EMAIL } from "@constants";
import type { Assertion } from "@the-minimal/types";
import { regex } from "@validators/regex";

export const email: Assertion<string> = regex(REGEX_EMAIL);
