import type { Validation } from "@the-minimal/types";
import { length } from "@validators/length/index";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(length(1));
