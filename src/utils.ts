import type { UnknownAssertion } from "@the-minimal/types";
import type { Infer } from "@types";

export function assert<$Assertion extends UnknownAssertion>(
	assertion: $Assertion,
	value: unknown,
): asserts value is Infer<$Assertion> {
	(assertion as any)(value);
}

export function parse<$Assertion extends UnknownAssertion>(
	assertion: $Assertion,
	value: unknown,
) {
	(assertion as any)(value);

	return value as Infer<$Assertion>;
}

export function is<$Assertion extends UnknownAssertion>(
	assertion: $Assertion,
	value: unknown,
): value is Infer<$Assertion> {
	try {
		(assertion as any)(value);

		return true;
	} catch {
		return false;
	}
}
