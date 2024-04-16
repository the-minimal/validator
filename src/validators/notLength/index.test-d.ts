import type { Validation } from "@the-minimal/types";
import { notLength } from "@validators/notLength/index";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(notLength(2));
