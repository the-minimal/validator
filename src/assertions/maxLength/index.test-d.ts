import { maxLength } from "@assertions/maxLength";
import type { MaxLength } from "@assertions/maxLength/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<MaxLength<2>>>(maxLength(2));
