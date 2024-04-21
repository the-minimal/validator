import { includes } from "@assertions/includes";
import type { Includes } from "@assertions/includes/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Includes<"string">>>(includes("hello"));
