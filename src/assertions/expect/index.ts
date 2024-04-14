import type { Assertion, Message } from "@types";

export const expect =
	<$Value>(fn: Assertion<$Value>, message: Message): Assertion<$Value> =>
	(value: unknown) => {
		try {
			fn(value);
		} catch (e) {
			throw message(e, value);
		}
	};
