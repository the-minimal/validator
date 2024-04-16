import type { Validation } from "@the-minimal/types";
import { includes } from "@validators/includes/index";
import { assertType } from "vitest";

assertType<Validation<string | Array<string>>>(includes("test"));
