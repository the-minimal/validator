import { maxValue } from "@assertions/maxValue";
import type { MaxValue } from "@assertions/maxValue/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<MaxValue<17>>>(maxValue(17));
