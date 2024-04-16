import type { Validation } from "@the-minimal/types";
import { boolean } from "@validators/boolean/index";
import { assertType } from "vitest";

assertType<Validation<boolean>>(boolean);
