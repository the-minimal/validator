import type { Validation } from "@the-minimal/types";
import { lGte } from "@validators/lGte";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(lGte(1));
