import { value } from "@assertions/value";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<2>>(value(2));
