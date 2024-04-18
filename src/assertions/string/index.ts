import { type } from "@assertions/type";
import type { Assertion } from "@the-minimal/types";

export const string: Assertion<string> = type<string>("string");
