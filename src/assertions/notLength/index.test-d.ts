import { notLength } from "@assertions/notLength";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown>>(notLength(2));
