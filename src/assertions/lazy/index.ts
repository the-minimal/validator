import type { UnknownAssertion } from "@the-minimal/types";

export const lazy = <$Validation extends UnknownAssertion>(
	fn: (value: unknown) => $Validation,
) =>
	((value: unknown) => {
		(fn(value) as any)(value);
	}) as $Validation;
