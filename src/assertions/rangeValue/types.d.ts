import type { Brand } from "@the-minimal/types";

export type RangeValue<$Min, $Max> = Brand<
	"RangeValue",
	{ min: $Min; max: $Max }
>;
