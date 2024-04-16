import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const nan: Assertion<number> = assert(Number.isNaN, "nan");
