import type { Assertion } from "@the-minimal/types";
import { validate } from "@validators/validate/index";
import { assertType } from "vitest";

assertType<Assertion<string>>(validate<string>(() => true, "test"));
