import type { Validation } from "@the-minimal/types";
import { date } from "@validators/date/index";
import { assertType } from "vitest";

assertType<Validation<Date>>(date);
