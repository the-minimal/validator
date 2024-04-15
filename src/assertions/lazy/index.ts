import type { Assertion } from "@types";

export const lazy = <$Assertion extends Assertion>(fn: $Assertion) => fn;
