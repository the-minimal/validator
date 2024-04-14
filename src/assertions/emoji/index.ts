import { regex } from "@assertions/regex";
import type { Assertion } from "@types";

export const emoji: Assertion<string> = regex(
	/^[\p{Extended_Pictographic}\p{Emoji_Component}]+$/u,
);
