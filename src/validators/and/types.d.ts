import type { UnknownAssertion } from "@the-minimal/types";
import type { Infer } from "@types";

export type AndSchema = Array<UnknownAssertion>;

export type InferAndSchema<$Validations extends AndSchema> =
	$Validations extends [infer $Head, ...infer $Tail]
		? $Tail extends [infer $1, ...infer $2]
			? Infer<$Head> & InferAndSchema<$Tail>
			: Infer<$Head>
		: never;
