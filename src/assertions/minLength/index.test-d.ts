import { minLength } from "@assertions/minLength";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown>>(minLength(2));
