import { type } from "@assertions/type";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<string>>(type<string>("string"));
assertType<Assertion<number>>(type<number>("number"));
assertType<Assertion<boolean>>(type<boolean>("boolean"));
