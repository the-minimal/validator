import type { Validation } from "@the-minimal/types";
import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { or } from "@validators/or/index";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Validation<string | number | boolean>>(
	or([string, number, boolean]),
);
