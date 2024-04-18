import type { Assertion } from "@the-minimal/types";
import { type } from "@validators/type";

export const string: Assertion<string> = type<string>("string");
