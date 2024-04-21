import type {
	Assertion,
	InferAssertion,
	UnknownAssertion,
} from "@the-minimal/types";

export type OrSchema = Array<unknown>;

export type InferOrSchema<$Schema extends OrSchema> = {
	[$Key in keyof $Schema]: Assertion<$Schema[$Key]>;
};
