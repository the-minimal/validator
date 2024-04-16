import type { Validation } from "@the-minimal/types";
import { maxLength } from "@validators/maxLength/index";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(maxLength(1));
