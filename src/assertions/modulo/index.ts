import { error } from "@error";
import type { Assertion } from "@the-minimal/types";

export const modulo =
	(divider: number, remainder: number): Assertion<unknown> =>
	(v: unknown) =>
		<number>v % divider === remainder || error(modulo);
