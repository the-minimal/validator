import { number } from "@assertions/number";
import { or2 } from "@assertions/or2";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string | number>>(or2(string, number));
