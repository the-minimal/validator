import type { Validation } from "@the-minimal/types";
import { lLte } from "@validators/lLte";
import { assertType } from "vitest";

assertType<Validation<string | Array<unknown>>>(lLte(1));
