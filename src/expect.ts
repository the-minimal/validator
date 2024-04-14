import type { Assertion, Message } from "./types";

export const expect =
	<$Value>(fn: Assertion<$Value>, message: Message) =>
	(value: unknown): asserts value is $Value => {
		try {
			fn(value);
		} catch (e) {
			throw message(e, value);
		}
	};
