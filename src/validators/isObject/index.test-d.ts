import type { Validation } from "@the-minimal/types";
import type { ObjectUnknown } from "@types";
import { isObject } from "@validators/isObject/index";
import { assertType } from "vitest";

assertType<Validation<ObjectUnknown>>(isObject);
