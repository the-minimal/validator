export type Nullable<$Type> = $Type | null;

export type Optional<$Type> = $Type | undefined;

export type Nullish<$Type> = $Type | null | undefined;

type Pretty<T> = {
	[K in keyof T]: T[K];
} & {};

export type ObjectUnknown = Record<string | number | symbol, unknown>;

export type FunctionUnknown = (...args: unknown[]) => unknown;

export type Assertion<$Value = unknown> = (
	value: unknown,
) => asserts value is $Value;

export type FakeAssertion = (value: unknown) => unknown;

export type Message = (error: any, value: unknown) => unknown;

export type Schema = Record<string, Assertion>;

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

export type InferAssertionValues<$Assertions extends Array<Assertion>> = {
	[$Key in keyof $Assertions]: $Assertions[$Key] extends Assertion<infer $Value>
		? $Value
		: never;
};

export type Class<$Type = unknown> = { new (): $Type };
