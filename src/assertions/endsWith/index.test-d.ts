import { endsWith } from "@assertions/endsWith";
import type { EndsWith } from "@assertions/endsWith/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<EndsWith<"?">>>(endsWith("?"));
