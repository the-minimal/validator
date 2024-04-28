import type { AnyBrand, Brand, None } from "@the-minimal/types";
import type { InferInput } from "@types";

export namespace Validate {
	export type Array<$Brand extends AnyBrand> = Brand<
		"array",
		$Brand,
		{
			input: InferInput<$Brand>[];
			output: None;
		}
	>;
}
