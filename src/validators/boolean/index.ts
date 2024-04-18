import type { Assertion } from "@the-minimal/types";
import { type } from "@validators/type";

export const boolean: Assertion<boolean> = type<boolean>("boolean");
