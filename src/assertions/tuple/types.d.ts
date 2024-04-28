import type { AnyBrand, Brand, None } from "@the-minimal/types";
import type { InferInput } from "@types";

export namespace Validate {
	export type Tuple<$Schema extends TupleSchema> = Brand<
		"tuple",
		$Schema,
		{
			input: InferTupleSchema<$Schema>;
			output: None;
		}
	>;
}

export type TupleSchema = AnyBrand[];

export type InferTupleSchema<$Schema extends TupleSchema> = {
	[$Key in keyof $Schema]: InferInput<$Schema[$Key]>;
};
