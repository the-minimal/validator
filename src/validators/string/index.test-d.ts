import type { Assertion } from "@the-minimal/types";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<string>>(string);
