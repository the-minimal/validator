import type {
	AnyBrand,
	Assertion,
	Brand,
	InferAssertion,
	None,
	UnknownAssertion,
} from "@the-minimal/types";

export namespace Validate {
	export type Or<$Schema extends OrSchema> = Brand<
		"or",
		$Schema,
		{
			input: InferOrSchema<$Schema>[number];
			output: None;
		}
	>;
}

export type OrSchema = AnyBrand[];

export type InferOrSchema<$Schema extends OrSchema> = {
	[$Key in keyof $Schema]: InferInput<$Schema[$Key]>;
};
