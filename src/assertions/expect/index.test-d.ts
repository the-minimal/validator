import { expect } from "@assertions/expect";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(expect(string, () => "test"));
