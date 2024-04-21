import { value } from "@assertions/value";
import type { Value } from "@assertions/value/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Value<2>>>(value(2));
