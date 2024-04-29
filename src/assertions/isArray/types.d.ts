import type { Brand, None } from "@the-minimal/types";

export namespace Validate {
	export namespace Type {
		export type Array = Brand<
			"array",
			None,
			{
				input: unknown[];
				output: None;
			}
		>;
	}
}
