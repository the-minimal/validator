import type { Assertion, Message } from "@types";
import { error } from "@utils/error";

export const expect =
	<$Value>(fn: Assertion<$Value>, message: Message): Assertion<$Value> =>
	(value: unknown) => {
		try {
			fn(value);
		} catch (e) {
			const msg = message(e, value);

			if (e instanceof Error) {
				error(e.name, value, e.stack, msg);
			} else if (e !== null && typeof e === "object" && "reason" in e) {
				error(e.reason as string, value, (e as any).context, msg);
			} else {
				error("unknown", value, e, msg);
			}
		}
	};
