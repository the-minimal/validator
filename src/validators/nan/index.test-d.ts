import type { Validation } from "@the-minimal/types";
import { nan } from "@validators/nan/index";
import { assertType } from "vitest";

assertType<Validation<number>>(nan);
