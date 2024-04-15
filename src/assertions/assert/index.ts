import type { Assertion, Predicate } from "@types";
import { error } from "@utils/error";

export const assert =
	(fn: Predicate, reason: string, context?: unknown): Assertion =>
	(value: unknown) => {
		!fn(value) && error(reason, value, context);
	};
