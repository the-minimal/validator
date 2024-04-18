import type { Validation } from "@the-minimal/types";
import { vNe } from "@validators/vNe";
import { assertType } from "vitest";

assertType<Validation<number>>(vNe(1));
