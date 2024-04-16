import type { Validation } from "@the-minimal/types";
import { email } from "@validators/email/index";
import { assertType } from "vitest";

assertType<Validation<string>>(email);
