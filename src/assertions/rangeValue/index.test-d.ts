import { rangeValue } from "@assertions/rangeValue";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<number>>(rangeValue(0, 150));
