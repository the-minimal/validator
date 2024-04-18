import type { Validation } from "@the-minimal/types";
import { vLte } from "@validators/vLte";
import { assertType } from "vitest";

assertType<Validation<number>>(vLte(1));
