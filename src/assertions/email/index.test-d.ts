import { email } from "@assertions/email";
import type { Email } from "@assertions/email/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Email>>(email);
