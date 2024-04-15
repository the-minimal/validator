import { assert } from "@assertions/assert";
import type { Assertion } from "@the-minimal/types";

export const integer: Assertion<number> = assert(Number.isInteger, "integer");
