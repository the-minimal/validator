import type { Infer, UnknownValidation } from "@types";

export type Intersection<$Validations extends Array<UnknownValidation>> =
	$Validations extends [infer $Head, ...infer $Tail]
		? $Tail extends [infer $1, ...infer $2]
			? Infer<$Head> & Intersection<$Tail>
			: Infer<$Head>
		: never;
