import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace String {
		export type StartsWith<$Input extends string> = Brand<
			"string-startswith",
			$Input
		>;
	}
}
