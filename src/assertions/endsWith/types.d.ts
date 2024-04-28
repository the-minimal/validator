import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace String {
		export type EndsWith<$Type extends string> = Brand<
			"string-endswith",
			$Type
		>;
	}
}
