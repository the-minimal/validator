import type { Validation } from "@the-minimal/types";
import { isObject } from "@validators/isObject/index";
import type { ObjectUnknown } from "@validators/isObject/types";
import { assertType } from "vitest";

assertType<Validation<ObjectUnknown>>(isObject);
