import { number } from "@assertions/number";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<number>>(number);
