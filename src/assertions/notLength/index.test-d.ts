import { notLength } from "@assertions/notLength";
import type { NotLength } from "@assertions/notLength/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<NotLength<2>>>(notLength(2));
