// TODO: move into @the-minimal/types
export type Intersection<$Values extends unknown[]> = $Values extends [
	infer $Head,
	...infer $Tail,
]
	? $Tail extends [infer _1]
		? $Head & Intersection<$Tail>
		: $Head
	: never;