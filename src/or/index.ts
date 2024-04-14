import { error } from "../error";
import type { Assertion, FakeAssertion } from "../types";

export const or = <$Assertions extends Array<Assertion>>(
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

		error("No assertion satisfied");
	};
};
