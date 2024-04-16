import type { Optional, Validation } from "@the-minimal/types";
import { optional } from "@validators/optional/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Validation<Optional<string>>>(optional(string));
