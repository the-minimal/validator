import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const nan: Assertion<number> = assert(Number.isNaN, "nan");
