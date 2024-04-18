import type { Assertion } from "@the-minimal/types";
import { array } from "@validators/array/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<Array<string>>>(array(string));
