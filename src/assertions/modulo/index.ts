import type { Modulo } from "@assertions/modulo/types";
import { Reason, error } from "@error";
import type { Assertion } from "@the-minimal/types";

export const modulo =
	<$Divider extends number, $Remainder extends number>(
		divider: $Divider,
		remainder: $Remainder,
	): Assertion<Modulo<$Divider, $Remainder>> =>
	(v) =>
		(v as number) % divider === remainder || error(Reason.modulo);