import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";
import { rangeLength } from ".";

assertType<Assertion<{ length: number }>>(rangeLength(8, 16));
