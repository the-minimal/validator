import { nullish } from "@assertions/nullish/index";
import { string } from "@assertions/string";
import type { Assertion, Nullish } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Nullish<string>>>(nullish(string));
