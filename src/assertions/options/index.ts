import { assert } from "@assertions/assert";

export const options = <$Options extends unknown[]>(options: $Options) =>
	assert(options.includes, "options", options);
