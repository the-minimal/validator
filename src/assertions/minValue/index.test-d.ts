import { minValue } from "@assertions/minValue";
import type { MinValue } from "@assertions/minValue/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<MinValue<18>>>(minValue(18));
