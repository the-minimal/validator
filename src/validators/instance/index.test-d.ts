import type { Validation } from "@the-minimal/types";
import { instance } from "@validators/instance/index";
import { assertType } from "vitest";

assertType<Validation<Date>>(instance(Date));
