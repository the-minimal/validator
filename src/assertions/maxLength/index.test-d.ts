import { maxLength } from "@assertions/maxLength";
import { assertType } from "vitest";

assertType<{ length: number }>(maxLength(2));
