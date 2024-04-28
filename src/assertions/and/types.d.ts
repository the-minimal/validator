import { and } from "@assertions/and/index";
import type { AnyBrand, Brand, None } from "@the-minimal/types";

export namespace Validate {
	export type And<$Types extends AndSchema> = Brand<
		"and",
		$Schema,
		{
			input: InferAndInputs<FilterAndInputs<$Types>>;
			output: InferAndOutputs<$Types>;
		}
	>;
}

export type AndSchema = AnyBrand[];

export type InferAndInputs<$Types extends unknown[]> = $Types extends [
	infer $Head,
	...infer $Tail,
]
	? $Tail extends [infer _1, ...infer _2]
		? $Head & InferAndOutputs<$Tail>
		: $Head
	: never;

type FilterAndInputs<$Schema extends AndSchema> = $Schema extends readonly [
	infer $Head,
	...infer $Tail,
]
	? $Tail extends readonly [infer _1, ...infer _2]
		? $Head extends Brand<any, any, { input: infer $Input; output: any }>
			? [$Input, ...FilterAndInputs<$Tail>]
			: []
		: $Head extends Brand<any, any, { input: infer $Input; output: any }>
			? [$Input]
			: []
	: [];

export type InferAndOutputs<$Schema extends AndSchema> =
	$Schema extends readonly [infer $Head, ...infer $Tail]
		? $Tail extends readonly [infer _1, ...infer _2]
			? ($Head extends Brand<any, any, { input: infer $Input; output: any }>
					? $Input
					: $Head) &
					InferAndOutputs<$Tail>
			: $Head
		: never;
