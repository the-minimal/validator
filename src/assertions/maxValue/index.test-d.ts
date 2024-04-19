import { maxValue } from "@assertions/maxValue";
import { assertType } from "vitest";

assertType<unknown>(maxValue(17));
