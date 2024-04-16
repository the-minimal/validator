import type { Validation } from "@the-minimal/types";
import { integer } from "@validators/integer/index";
import { assertType } from "vitest";

assertType<Validation<number>>(integer);
