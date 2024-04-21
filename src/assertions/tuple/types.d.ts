import type { Assertion } from "@the-minimal/types";

export type TupleSchema = Array<unknown>;

export type InferTupleSchema<$Schema extends TupleSchema> = {
	[$Key in keyof $Schema]: Assertion<$Schema[$Key]>;
};
