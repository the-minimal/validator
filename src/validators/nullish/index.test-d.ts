import type { Assertion, Nullish } from "@the-minimal/types";
import { nullish } from "@validators/nullish/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<Nullish<string>>>(nullish(string));
