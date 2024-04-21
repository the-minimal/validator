import { startsWith } from "@assertions/startsWith";
import type { StartsWith } from "@assertions/startsWith/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<StartsWith<"ID: ">>>(startsWith("ID: "));
