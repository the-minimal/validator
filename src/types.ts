import type { Assertion, Pretty } from "@the-minimal/types";

export type ObjectUnknown = Record<string | number | symbol, unknown>;

export type FunctionUnknown = (...args: unknown[]) => unknown;

export type FakeAssertion = (value: unknown) => unknown;

export type Message = (error: any, value: unknown) => string;

export type Schema = Record<string, Assertion<unknown>>;

export type InferSchema<$Schema extends Schema> = Pretty<{
	[$Key in keyof $Schema]: $Schema[$Key] extends Assertion<infer $Value>
		? $Value
		: never;
}>;

export type Intersection<R extends unknown[]> = R extends [infer H, ...infer S]
	? H & Intersection<S>
	: R extends (infer T)[]
		? T
		: R;

export type InferAssertionValues<
	$Assertions extends Array<Assertion<unknown>>,
> = {
	[$Key in keyof $Assertions]: $Assertions[$Key] extends Assertion<infer $Value>
		? $Value
		: never;
};
