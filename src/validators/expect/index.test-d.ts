import type { Assertion } from "@the-minimal/types";
import { expect } from "@validators/expect";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<string>>(expect(string, () => "test"));
