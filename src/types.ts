import type { Pretty, Validation } from "@the-minimal/types";

export type ObjectUnknown = Record<string | number | symbol, unknown>;

export type FunctionUnknown = (...args: unknown[]) => unknown;

export type FakeValidation = (value: unknown) => unknown;

export type Message = (error: any, value: unknown) => string;

export type Schema = Record<string, Validation<unknown>>;

export type InferSchema<$Schema extends Schema> = Pretty<{
	[$Key in keyof $Schema]: $Schema[$Key] extends Validation<infer $Value>
		? $Value
		: never;
}>;

export type Intersection<R extends unknown[]> = R extends [infer H, ...infer S]
	? H & Intersection<S>
	: R extends (infer T)[]
		? T
		: R;

export type InferValidationValues<
	$Validations extends Array<Validation<unknown>>,
> = {
	[$Key in keyof $Validations]: $Validations[$Key] extends Validation<
		infer $Value
	>
		? $Value
		: never;
};
