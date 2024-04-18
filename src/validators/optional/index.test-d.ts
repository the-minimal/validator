import type { Assertion, Optional } from "@the-minimal/types";
import { optional } from "@validators/optional/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<Optional<string>>>(optional(string));
