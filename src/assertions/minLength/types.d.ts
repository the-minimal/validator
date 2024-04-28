import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Length {
		export type Min<$Type extends number> = Brand<"length-min", $Input>;
	}
}
