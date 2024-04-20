import type { Brand } from "@the-minimal/types";

export type RangeLength<$Min extends number, $Max extends number> = Brand<
	"RangeLength",
	{ min: $Min; max: $Max }
>;
