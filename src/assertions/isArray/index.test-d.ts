import { isArray } from "@assertions/isArray/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown[]>>(isArray);
