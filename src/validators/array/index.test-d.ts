import type { Validation } from "@the-minimal/types";
import { array } from "@validators/array/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Validation<Array<string>>>(array(string));
