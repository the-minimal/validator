import { regex } from "@assertions/regex";
import type { Assertion } from "@types";

export const ipv4: Assertion<string> = regex(
	/^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u,
);
