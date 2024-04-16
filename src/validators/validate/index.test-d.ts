import type { Validation } from "@the-minimal/types";
import { validate } from "@validators/validate/index";
import { assertType } from "vitest";

assertType<Validation<string>>(validate<string>(() => true, "test"));
