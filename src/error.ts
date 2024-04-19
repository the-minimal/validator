import type { Optional } from "@the-minimal/types";
import type { CustomError } from "types";

const type = "validator";

export const error = (
	reason: string,
	value: Optional<unknown> = undefined,
	props: Optional<unknown> = undefined,
	message: Optional<string> = undefined,
) => {
	throw {
		type,
		reason,
		value,
		props,
		message,
	} satisfies CustomError<"validator", string>;
};
