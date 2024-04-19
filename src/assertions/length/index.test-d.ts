import { length } from "@assertions/length";
import { assertType } from "vitest";

assertType<{ length: number }>(length(2));
