import { minValue } from "@assertions/minValue";
import { assertType } from "vitest";

assertType<unknown>(minValue(18));
