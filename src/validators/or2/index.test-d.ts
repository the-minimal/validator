import type { Assertion } from "@the-minimal/types";
import { number } from "@validators/number";
import { or2 } from "@validators/or2";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<string | number>>(or2(string, number));