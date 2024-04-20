import type { Reason } from "@constants";

export const error = (reason: Reason) => {
	throw reason;
};
