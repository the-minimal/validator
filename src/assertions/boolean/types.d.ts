import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Type {
		export type Boolean = Brand<
			"type",
			"boolean",
			{
				input: boolean;
				output: boolean;
			}
		>;
	}
}
