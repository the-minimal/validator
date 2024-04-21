import type { Integer } from "@assertions/integer/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";
import { integer } from ".";

assertType<Assertion<Integer>>(integer);
