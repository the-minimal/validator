import { type } from "@assertions/type";
import type { Assertion } from "@the-minimal/types";

export const number: Assertion<number> = type<number>("number");
