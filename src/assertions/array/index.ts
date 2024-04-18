import { isArray } from "@assertions/isArray";
import type { Assertion } from "@the-minimal/types";

export const array = <$Value>(fn: Assertion<$Value>) =>
	((value) => {
		isArray(value);

		for (let i = 0; i < (value as unknown[]).length; ++i) {
			fn((value as any)[i]);
		}
	}) as Assertion<Array<$Value>>;
