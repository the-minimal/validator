import type { Assertion } from "@the-minimal/types";
import { assert } from "@validators/assert";

export const integer: Assertion<number> = assert(Number.isInteger, "integer");
