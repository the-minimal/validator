import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Value {
		export type Min<$Input> = Brand<"value-min", $Input>;
	}
}
