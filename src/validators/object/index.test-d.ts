import type { Assertion } from "@the-minimal/types";
import { object } from "@validators/object/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Assertion<{ name: string }>>(object({ name: string }));
