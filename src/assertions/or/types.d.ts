import type { InferAssertion, UnknownAssertion } from "@the-minimal/types";

export type OrSchema = Array<UnknownAssertion>;

export type InferOrSchema<$Schema extends OrSchema> = {
	[$Key in keyof $Schema]: InferAssertion<$Schema[$Key]>;
};
