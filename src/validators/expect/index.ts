import { error, isError } from "@the-minimal/error";
import type { Validation } from "@the-minimal/types";
import type { Message } from "@types";

export const expect = <$Value>(fn: Validation<$Value>, message: Message) =>
	((value: unknown) => {
		try {
			fn(value);
		} catch (e) {
			const msg = message(e, value);

			if (e instanceof Error) {
				error(`unknown:${e.name}`, value, e.stack, msg);
			} else if (isError(e)) {
				error((e as any).reason, value, (e as any).context, msg);
			} else {
				error("unknown:unknown", value, e, msg);
			}
		}
	}) as Validation<$Value>;
