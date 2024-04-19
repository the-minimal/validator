import { notValue } from "@assertions/notValue";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<number>>(notValue(2));