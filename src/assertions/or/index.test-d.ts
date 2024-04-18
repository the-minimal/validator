import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { or } from "@assertions/or/index";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string | number | boolean>>(or([string, number, boolean]));
