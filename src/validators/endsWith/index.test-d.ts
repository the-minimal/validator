import type { Validation } from "@the-minimal/types";
import { endsWith } from "@validators/endsWith/index";
import { assertType } from "vitest";

assertType<Validation<string>>(endsWith("test"));
