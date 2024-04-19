import { endsWith } from "@assertions/endsWith";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(endsWith("?"));
