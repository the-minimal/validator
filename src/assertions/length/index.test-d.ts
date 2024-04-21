import { length } from "@assertions/length";
import type { Length } from "@assertions/length/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Length<2>>>(length(2));
