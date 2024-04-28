import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Length {
		export type Eq<$Type extends number> = Brand<"length-eq", $Input>;
	}
}
