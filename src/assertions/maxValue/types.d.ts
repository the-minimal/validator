import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Value {
		export type Max<$Input> = Brand<"value-max", $Input>;
	}
}
