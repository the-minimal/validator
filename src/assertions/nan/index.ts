import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const nan: Assertion<number> = assert(Number.isNaN, "nan");
