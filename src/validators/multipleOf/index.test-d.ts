import type { Validation } from "@the-minimal/types";
import { multipleOf } from "@validators/multipleOf/index";
import { assertType } from "vitest";

assertType<Validation<number>>(multipleOf(2));
