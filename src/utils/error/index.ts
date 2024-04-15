export const error = (reason: string, value: unknown, props?: unknown) => {
	throw { reason, value, props };
};
