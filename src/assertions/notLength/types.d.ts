import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Length {
		export type Ne<$Type extends number> = Brand<"length-ne", $Input>;
	}
}
