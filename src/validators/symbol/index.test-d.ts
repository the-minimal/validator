import type { Validation } from "@the-minimal/types";
import { symbol } from "@validators/symbol";
import { assertType } from "vitest";

assertType<Validation<symbol>>(symbol);
