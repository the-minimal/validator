import type {
	AnyBrand,
	Brand,
	Nullable as TNullable,
} from "@the-minimal/types";
import type { InferInput } from "@types";

export namespace Validate {
	export type Nullable<$Brand extends AnyBrand> = Brand<
		"nullable",
		None,
		{ input: TNullable<InferInput<$Brand>>; output: None }
	>;
}
