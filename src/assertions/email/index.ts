import { regex } from "@assertions/regex";
import type { Assertion } from "@types";

export const email: Assertion<string> = regex(
	/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu,
);
