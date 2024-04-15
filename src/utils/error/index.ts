import type { Nullable } from "@types";

export const error = (
	reason: string,
	value: unknown,
	context?: unknown,
	message: Nullable<string> = null,
) => {
	throw { reason, value, context, message };
};
