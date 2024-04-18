import type { Assertion } from "@the-minimal/types";
import { boolean } from "@validators/boolean/index";
import { assertType } from "vitest";

assertType<Assertion<boolean>>(boolean);
