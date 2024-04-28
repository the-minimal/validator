import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Number {
		export type Modulo<
			$Divider extends number,
			$Remainder extends number,
		> = Brand<
			"number-modulo",
			{
				divider: $Divider;
				remainder: $Remainder;
			}
		>;
	}
}
