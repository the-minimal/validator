import type { InferAssertion, UnknownAssertion } from "@the-minimal/types";

export type TupleSchema = Array<UnknownAssertion>;

export type InferTupleSchema<$Schema extends TupleSchema> = {
	[$Key in keyof $Schema]: InferAssertion<$Schema[$Key]>;
};
