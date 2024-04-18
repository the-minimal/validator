import type { Validation } from "@the-minimal/types";
import { vEq } from "@validators/vEq";
import { assertType } from "vitest";

assertType<Validation<number>>(vEq(1));
