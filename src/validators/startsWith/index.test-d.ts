import type { Validation } from "@the-minimal/types";
import { startsWith } from "@validators/startsWith/index";
import { assertType } from "vitest";

assertType<Validation<string>>(startsWith("test"));
