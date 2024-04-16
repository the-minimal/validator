import type { UnknownValidation } from "@types";
import { unknown } from "@validators/unknown";
import { assertType } from "vitest";

assertType<UnknownValidation>(unknown);
