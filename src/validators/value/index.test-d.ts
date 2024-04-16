import type { Validation } from "@the-minimal/types";
import { value } from "@validators/value/index";
import { assertType } from "vitest";

assertType<Validation<number>>(value(1));
