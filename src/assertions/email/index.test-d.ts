import { email } from "@assertions/email";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(email);
