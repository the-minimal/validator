import type { Brand, None } from "@the-minimal/types";

export namespace Validate {
	export namespace Type {
		export type Object = Brand<
			"object",
			None,
			{
				input: ObjectUnknown;
				output: None;
			}
		>;
	}
}

export type ObjectUnknown = Record<string, unknown>;
