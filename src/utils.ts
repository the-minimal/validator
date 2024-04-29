import type { Assertion } from "@the-minimal/types";

export function assert<$Value>(
	assertion: Assertion<$Value>,
	value: unknown,
): asserts value is $Value {
	(assertion as any)(value);
}

export function parse<$Value>(assertion: Assertion<$Value>, value: unknown) {
	(assertion as any)(value);

	return value as $Value;
}

export function is<$Value>(assertion: $Value, value: unknown): value is $Value {
	try {
		(assertion as any)(value);

		return true;
	} catch {
		return false;
	}
}
