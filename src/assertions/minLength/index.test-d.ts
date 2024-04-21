import { minLength } from "@assertions/minLength";
import type { MinLength } from "@assertions/minLength/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<MinLength<2>>>(minLength(2));
