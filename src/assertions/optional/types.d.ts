import type {
	AnyBrand,
	Brand,
	Optional as TOptional,
} from "@the-minimal/types";
import type { InferInput } from "@types";

export namespace Validate {
	export type Optional<$Brand extends AnyBrand> = Brand<
		"optional",
		None,
		{ input: TOptional<InferInput<$Brand>>; output: None }
	>;
}
