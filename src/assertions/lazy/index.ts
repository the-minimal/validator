import type { Assertion } from "@the-minimal/types";

export const lazy = <$Assertion extends Assertion<unknown>>(fn: $Assertion) =>
	fn;
