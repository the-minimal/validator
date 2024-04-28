import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Length {
		export type Max<$Type extends number> = Brand<"length-max", $Input>;
	}
}
