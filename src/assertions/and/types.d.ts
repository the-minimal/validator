import type { Assertion } from "@the-minimal/types";

export type AndSchema = Array<unknown>;

export type InferAndSchema<$Schema extends AndSchema> = {
	[$Key in keyof $Schema]: Assertion<$Schema[$Key]>;
};

export type InferAndOutput<$Schema extends AndSchema> = $Schema extends [
	infer $Head,
	...infer $Tail,
]
	? $Tail extends [infer $1, ...infer $2]
		? $Head & InferAndOutput<$Tail>
		: $Head
	: never;
