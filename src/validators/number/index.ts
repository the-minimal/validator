import type { Assertion } from "@the-minimal/types";
import { type } from "@validators/type";

export const number: Assertion<number> = type<number>("number");
