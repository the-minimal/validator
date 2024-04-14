import { error } from "./error";
import { Assertion } from "./types";

export const or = <$Assertions extends Array<Assertion>>(fns: $Assertions) => {
	const length = fns.length;

	return function(value: unknown): asserts value is $Assertions[number] {
		for(let i = 0; i < length; ++i) {
			try {
				(fns as any)[i](value);
				return;
			} catch {}
		}

		error("No assertion satisfied");
	};
};
