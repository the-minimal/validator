import { includes } from "@assertions/includes";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(includes("hello"));
