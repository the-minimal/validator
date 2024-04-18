import type { Validation } from "@the-minimal/types";
import { vGte } from "@validators/vGte";
import { assertType } from "vitest";

assertType<Validation<number>>(vGte(1));
