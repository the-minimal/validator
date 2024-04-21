import { rangeValue } from "@assertions/rangeValue";
import type { RangeValue } from "@assertions/rangeValue/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<RangeValue<0, 150>>>(rangeValue(0, 150));
