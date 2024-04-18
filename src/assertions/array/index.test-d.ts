import { array } from "@assertions/array/index";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Array<string>>>(array(string));
