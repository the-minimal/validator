import type { Validation } from "@the-minimal/types";
import { notValue } from "@validators/notValue/index";
import { assertType } from "vitest";

assertType<Validation<number>>(notValue(1));
