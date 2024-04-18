import type { Validation } from "@the-minimal/types";
import { lEq } from "@validators/lEq";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(lEq(1));
