import { isObject } from "@assertions/isObject/index";
import type { ObjectUnknown } from "@assertions/isObject/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<ObjectUnknown>>(isObject);
