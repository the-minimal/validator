import { boolean } from "@assertions/boolean";
import { number } from "@assertions/number";
import { string } from "@assertions/string";
import { tuple } from "@assertions/tuple/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<[string, number, boolean]>>(
	tuple([string, number, boolean]),
);
