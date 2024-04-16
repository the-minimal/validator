import type { Validation } from "@the-minimal/types";
import { any } from "@validators/any";
import { assertType } from "vitest";

assertType<Validation<any>>(any);
