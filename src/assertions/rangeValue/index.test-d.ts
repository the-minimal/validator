import { rangeValue } from "@assertions/rangeValue";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown>>(rangeValue(0, 150));
