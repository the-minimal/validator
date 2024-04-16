import type { Validation } from "@the-minimal/types";
import type { FakeValidation } from "@types";

export const lazy = <$Validation extends Validation<unknown>>(
	fn: (value: unknown) => $Validation,
) =>
	((value: unknown) => {
		(fn(value) as FakeValidation)(value);
	}) as $Validation;
