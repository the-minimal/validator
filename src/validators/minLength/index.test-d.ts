import type { Validation } from "@the-minimal/types";
import { minLength } from "@validators/minLength/index";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(minLength(1));
