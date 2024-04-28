import type { Validate } from "@assertions/modulo/types";
import { error } from "@error";

export const modulo = <$Divider extends number, $Remainder extends number>(
	divider: $Divider,
	remainder: $Remainder,
) =>
	((v: number) =>
		v % divider === remainder ||
		error(modulo)) as unknown as Validate.Number.Modulo<$Divider, $Remainder>;
