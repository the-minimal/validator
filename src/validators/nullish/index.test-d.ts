import type { Nullish, Validation } from "@the-minimal/types";
import { nullish } from "@validators/nullish/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Validation<Nullish<string>>>(nullish(string));
