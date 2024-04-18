import type { Validation } from "@the-minimal/types";
import { lNe } from "@validators/lNe";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(lNe(2));
