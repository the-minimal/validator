import type { AnyBrand, Brand, None } from "@the-minimal/types";
import type { InferInput } from "@types";

export namespace Validate {
	export type Union<$Schema extends UnionSchema> = Brand<
		"union",
		$Schema,
		{
			input: $Schema[number];
			output: None;
		}
	>;
}

export type UnionSchema = unknown[];
