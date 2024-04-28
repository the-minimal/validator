import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Type {
		export type Number = Brand<
			"type",
			"number",
			{
				input: number;
				output: number;
			}
		>;
	}
}
