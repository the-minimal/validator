import { boolean } from "@assertions/boolean/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<boolean>>(boolean);
