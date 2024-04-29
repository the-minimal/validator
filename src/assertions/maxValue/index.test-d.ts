import { maxValue } from "@assertions/maxValue";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown>>(maxValue(17));
