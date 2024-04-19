import { minLength } from "@assertions/minLength";
import { assertType } from "vitest";

assertType<{ length: number }>(minLength(2));
