import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Value {
		export type Range<$Min, $Max> = Brand<
			"value-range",
			{ min: $Min; max: $Max }
		>;
	}
}
