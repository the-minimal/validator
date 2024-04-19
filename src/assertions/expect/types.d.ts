import type { CustomError } from "@the-minimal/types";

export type Message = (
	error: CustomError<"validator">,
	value: unknown,
) => string;
