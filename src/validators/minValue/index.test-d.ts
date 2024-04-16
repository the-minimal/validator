import type { Validation } from "@the-minimal/types";
import { minValue } from "@validators/minValue/index";
import { assertType } from "vitest";

assertType<Validation<number>>(minValue(1));
