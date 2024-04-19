import type { CustomError } from "types";

export type Message = (
	error: CustomError<"validator">,
	value: unknown,
) => string;
