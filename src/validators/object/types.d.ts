import type {
	InferAssertion,
	Pretty,
	UnknownAssertion,
} from "@the-minimal/types";

export type ObjectSchema = Record<string, UnknownAssertion>;

export type InferObjectSchema<$Schema extends ObjectSchema> = Pretty<{
	[$Key in keyof $Schema]: InferAssertion<$Schema[$Key]>;
}>;
