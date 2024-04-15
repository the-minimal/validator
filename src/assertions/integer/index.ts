import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const integer: Assertion<number> = assert(Number.isInteger, "integer");
