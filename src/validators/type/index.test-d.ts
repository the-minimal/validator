import type { Assertion } from "@the-minimal/types";
import { type } from "@validators/type";
import { assertType } from "vitest";

assertType<Assertion<string>>(type<string>("string"));
assertType<Assertion<number>>(type<number>("number"));
assertType<Assertion<boolean>>(type<boolean>("boolean"));
