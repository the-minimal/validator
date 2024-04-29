import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Type {
		export type Any = Brand<
			"type",
			any,
			{
				input: any;
				output: any;
			}
		>;
	}
}
