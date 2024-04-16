import type { Validation } from "@the-minimal/types";
import { maxValue } from "@validators/maxValue/index";
import { assertType } from "vitest";

assertType<Validation<number>>(maxValue(1));
