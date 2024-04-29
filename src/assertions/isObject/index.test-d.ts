import { isObject } from "@assertions/isObject/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Record<string, unknown>>>(isObject);
