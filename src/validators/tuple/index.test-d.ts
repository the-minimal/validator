import type { Assertion } from "@the-minimal/types";
import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { string } from "@validators/string";
import { tuple } from "@validators/tuple/index";
import { assertType } from "vitest";

assertType<Assertion<[string, number, boolean]>>(
	tuple([string, number, boolean]),
);
