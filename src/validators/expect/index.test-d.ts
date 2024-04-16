import type { Validation } from "@the-minimal/types";
import { expect } from "@validators/expect";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Validation<string>>(expect(string, () => "test"));
