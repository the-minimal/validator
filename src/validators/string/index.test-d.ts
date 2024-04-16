import type { Validation } from "@the-minimal/types";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Validation<string>>(string);
