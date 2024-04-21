import { notValue } from "@assertions/notValue";
import type { NotValue } from "@assertions/notValue/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<NotValue<2>>>(notValue(2));
