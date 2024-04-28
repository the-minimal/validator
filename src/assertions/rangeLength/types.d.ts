import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Length {
		export type Range<$Min extends number, $Max extends number> = Brand<
			"length-range",
			{
				min: $Min;
				max: $Max;
			}
		>;
	}
}
