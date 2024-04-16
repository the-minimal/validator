import { REGEX_EMAIL } from "@constants";
import type { Validation } from "@the-minimal/types";
import { regex } from "@validators/regex/index";
import { assertType } from "vitest";

assertType<Validation<string>>(regex(REGEX_EMAIL));
