import type { Assertion } from "@the-minimal/types";
import { number } from "@validators/number";
import { assertType } from "vitest";

assertType<Assertion<number>>(number);
