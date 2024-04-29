import { maxLength } from "@assertions/maxLength";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<unknown>>(maxLength(2));
