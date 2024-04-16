import type { Validation } from "@the-minimal/types";
import { bigint } from "@validators/bigint";
import { assertType } from "vitest";

assertType<Validation<bigint>>(bigint);
