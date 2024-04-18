import { nullable } from "@assertions/nullable";
import { string } from "@assertions/string";
import type { Assertion, Nullable } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Nullable<string>>>(nullable(string));
