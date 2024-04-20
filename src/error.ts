import type { CustomError, Optional } from "@the-minimal/types";

const type = "validator";

export const error = (
	reason: string,
	value?: unknown,
	props?: unknown,
	message?: string,
) => {
	throw {
		type,
		reason,
		value,
		props,
		message,
	} satisfies CustomError<"validator", string>;
};
