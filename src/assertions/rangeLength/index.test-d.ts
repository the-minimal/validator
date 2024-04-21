import type { RangeLength } from "@assertions/rangeLength/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";
import { rangeLength } from ".";

assertType<Assertion<RangeLength<8, 16>>>(rangeLength(8, 16));
