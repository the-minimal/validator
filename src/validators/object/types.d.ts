import type { Pretty, Validation } from "@the-minimal/types";

export type Schema = Record<string, UnknownValidation>;

export type InferSchema<$Schema extends Schema> = Pretty<{
	[$Key in keyof $Schema]: $Schema[$Key] extends Validation<infer $Value>
		? $Value
		: never;
}>;
