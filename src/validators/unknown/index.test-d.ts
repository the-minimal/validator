import type { Validation } from "@the-minimal/types";
import { unknown } from "@validators/unknown";
import { assertType } from "vitest";

assertType<Validation<unknown>>(unknown);
