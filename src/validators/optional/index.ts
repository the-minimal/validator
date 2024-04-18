import { error } from "@error";
import type { Assertion, Optional } from "@the-minimal/types";

export const optional = <$Value>(validation: Assertion<$Value>) =>
	((value) => {
		try {
			validation(value);
		} catch {
			value !== undefined && error("optional", value);
		}
	}) as Assertion<Optional<$Value>>;
