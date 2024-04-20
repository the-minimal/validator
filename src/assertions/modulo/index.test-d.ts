import { modulo } from "@assertions/modulo/index";
import type { Modulo } from "@assertions/modulo/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Modulo<2, 0>>>(modulo(2, 0));
