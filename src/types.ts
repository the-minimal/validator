import type { InferValidation, Validation } from "@the-minimal/types";

export type UnknownValidation = Validation<unknown>;

export type Infer<
	$SomeValidation extends
		| UnknownValidation
		| Array<UnknownValidation>
		| Record<string, UnknownValidation>,
> = $SomeValidation extends Validation<infer $Type>
	? $Type
	: $SomeValidation extends Array<infer $Validation>
		? $Validation extends Validation<infer $Type>
			? $Type
			: never
		: $SomeValidation extends Record<string, UnknownValidation>
			? {
					[$Key in keyof $SomeValidation]: InferValidation<
						$SomeValidation[$Key]
					>;
				}
			: never;
