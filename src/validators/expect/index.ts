import { error, isError } from "@the-minimal/error";
import type { Assertion } from "@the-minimal/types";
import type { Message } from "@types";

export const expect =
	<$Value>(fn: Assertion<$Value>, message: Message): Assertion<$Value> =>
	(value: unknown) => {
		try {
			fn(value);
		} catch (e) {
			const msg = message(e, value);

			if (e instanceof Error) {
				error(`unknown:${e.name}`, value, e.stack, msg);
			} else if (isError(e)) {
				error(e.reason, value, e.context, msg);
			} else {
				error("unknown:unknown", value, e, msg);
			}
		}
	};
