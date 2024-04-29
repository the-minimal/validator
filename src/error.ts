export const error = (cause: unknown, message = "") => {
	throw {
		name: "Validation",
		message,
		cause,
	};
};
