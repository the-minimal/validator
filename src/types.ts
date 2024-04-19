import type {
	InferAssertion,
	Optional,
	UnknownAssertion,
} from "@the-minimal/types";

export type Infer<$Assertion extends UnknownAssertion> =
	InferAssertion<$Assertion>;

export type CustomError<
	$Type extends string,
	$Reason extends string,
	$Value = Optional<unknown>,
	$Props = Optional<unknown>,
	$Message = Optional<string>,
> = {
	type: $Type;
	reason: $Reason;
	value: $Value;
	props: $Props;
	message: $Message;
};
