import { minValue } from "@assertions/minValue";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown>>(minValue(18));
