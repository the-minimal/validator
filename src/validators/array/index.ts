import type { Validation } from "@the-minimal/types";
import { isArray } from "@validators/isArray";

export const array = <$Value>(fn: Validation<$Value>) =>
	((value) => {
		isArray(value);

		for (let i = 0; i < (value as unknown[]).length; ++i) {
			fn((value as any)[i]);
		}
	}) as Validation<Array<$Value>>;
