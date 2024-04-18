import { validate } from "@assertions/validate/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(validate<string>(() => true, "test"));
