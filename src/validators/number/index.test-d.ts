import type { Validation } from "@the-minimal/types";
import { number } from "@validators/number";
import { assertType } from "vitest";

assertType<Validation<number>>(number);
