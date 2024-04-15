import { ERROR_PREFIX } from "@constants";
import { error } from "@the-minimal/error";
import type { Assertion } from "@the-minimal/types";
import type { FakeAssertion } from "@types";

export const or = <$Assertions extends Array<Assertion<unknown>>>(
	fns: $Assertions,
): Assertion<$Assertions[number]> => {
	const length = fns.length;

	return (value) => {
		for (let i = 0; i < length; ++i) {
			try {
				(fns[i] as FakeAssertion)(value);
				return;
			} catch {}
		}

		error(`${ERROR_PREFIX}:or`, value);
	};
};
