import type { Assertion } from "@the-minimal/types";
import { isArray } from "@validators/isArray/index";
import { assertType } from "vitest";

assertType<Assertion<Array<unknown>>>(isArray);
