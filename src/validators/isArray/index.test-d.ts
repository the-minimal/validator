import type { Validation } from "@the-minimal/types";
import { isArray } from "@validators/isArray/index";
import { assertType } from "vitest";

assertType<Validation<Array<unknown>>>(isArray);
