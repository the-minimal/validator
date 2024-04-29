import { modulo } from "@assertions/modulo/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown>>(modulo(2, 0));
