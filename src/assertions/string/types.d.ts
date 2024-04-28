import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Type {
		export type String = Brand<
			"type",
			"string",
			{
				input: string;
				output: string;
			}
		>;
	}
}
