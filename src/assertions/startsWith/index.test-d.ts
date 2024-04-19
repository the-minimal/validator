import { startsWith } from "@assertions/startsWith";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(startsWith("ID: "));
