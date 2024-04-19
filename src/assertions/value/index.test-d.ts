import { value } from "@assertions/value";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<number>>(value(2));