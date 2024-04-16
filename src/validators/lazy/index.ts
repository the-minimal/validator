import type { UnknownValidation } from "@types";

export const lazy = <$Validation extends UnknownValidation>(
	fn: (value: unknown) => $Validation,
) =>
	((value: unknown) => {
		(fn(value) as UnknownValidation)(value);
	}) as $Validation;
