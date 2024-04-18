import { object } from "@assertions/object/index";
import { string } from "@assertions/string";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<{ name: string }>>(object({ name: string }));
