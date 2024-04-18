import { optional } from "@assertions/optional/index";
import { string } from "@assertions/string";
import type { Assertion, Optional } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Optional<string>>>(optional(string));
