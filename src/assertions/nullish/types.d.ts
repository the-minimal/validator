import type { AnyBrand, Brand, Nullish as TNullish } from "@the-minimal/types";
import type { InferInput } from "@types";

export namespace Validate {
	export type Nullish<$Brand extends AnyBrand> = Brand<
		"nullish",
		None,
		{ input: TNullish<InferInput<$Brand>>; output: None }
	>;
}
