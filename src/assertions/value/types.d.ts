import type { Brand, None } from "@the-minimal/types";

export namespace Validate {
	export namespace Value {
		export type Eq<$Input> = Brand<
			"value-eq",
			$Input,
			{
				input: $Input;
				output: None;
			}
		>;
	}
}
