import { error } from "@error";
import type { Assertion, Nullable } from "@the-minimal/types";

export const nullable = <$Value>(validation: Assertion<$Value>) =>
	((value: unknown) => {
		try {
			validation(value);
		} catch {
			value !== null && error("nullable", value);
		}
	}) as Assertion<Nullable<$Value>>;
