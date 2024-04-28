import type { Brand } from "@the-minimal/types";

export type InferInput<$Value> = $Value extends Brand<
	any,
	any,
	{
		input: infer $Type;
		output: any;
	}
>
	? $Type
	: $Value;

export type InferOutput<$Value> = $Value extends Brand<
	any,
	any,
	{
		input: any;
		output: infer $Type;
	}
>
	? $Type
	: $Value;
