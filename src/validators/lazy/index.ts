import type { Assertion } from "@the-minimal/types";
import type { FakeAssertion } from "@types";

export const lazy = <$Assertion extends Assertion<unknown>>(
	fn: (value: unknown) => $Assertion,
) =>
	((value: unknown) => {
		(fn(value) as FakeAssertion)(value);
	}) as $Assertion;
