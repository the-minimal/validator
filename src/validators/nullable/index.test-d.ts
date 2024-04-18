import type { Assertion, Nullable } from "@the-minimal/types";
import { nullable } from "@validators/nullable";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<Nullable<string>>>(nullable(string));
