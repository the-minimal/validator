import { assert } from "@validators/assert";

export const options = <$Options extends unknown[]>(options: $Options) =>
	assert((v) => options.includes(v), "options", options);
