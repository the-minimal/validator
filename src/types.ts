export type Assertion<$Value = any> = (value: any) => asserts value is $Value;

export type Message = (error: any, value: any) => any;

export type Schema = Record<string, Assertion>;

export type InferSchema<$Schema extends Schema> = {
	[$Key in keyof $Schema]: $Schema[$Key] extends Assertion<infer $Value> ? $Value: never;
};

export type Intersection<R extends any[]> = R extends [infer H, ...infer S] 
	? H & Intersection<S>
	: R extends (infer T)[] ? T: R;

export type InferAssertionValues<$Assertions extends Array<Assertion>> = {
	[$Key in keyof $Assertions]: $Assertions[$Key] extends Assertion<infer $Value> ? $Value: never
};
