import { assert } from "@assertions/assert";
import type { Assertion } from "@types";

export const finite: Assertion<number> = assert(Number.isFinite, "finite");
