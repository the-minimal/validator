import { notLength } from "@assertions/notLength";
import { assertType } from "vitest";

assertType<{ length: number }>(notLength(2));
