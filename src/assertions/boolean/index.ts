import { type } from "@assertions/type";
import type { Assertion } from "@the-minimal/types";

export const boolean: Assertion<boolean> = type<boolean>("boolean");
