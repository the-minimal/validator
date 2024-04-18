import type { Assertion } from "@the-minimal/types";
import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { or3 } from "@validators/or3/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<string | number | boolean>>(or3(string, number, boolean));