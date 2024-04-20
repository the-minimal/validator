import type { Brand } from "@the-minimal/types";

export type Modulo<$Divider extends number, $Remainder extends number> = Brand<
	"Modulo",
	{
		divider: $Divider;
		remainder: $Remainder;
	}
>;
