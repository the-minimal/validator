import { regex } from "@assertions/regex";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(regex(/[0-9]/));
