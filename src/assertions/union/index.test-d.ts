import { union } from "@assertions/union/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<"one" | "two">>(union(["one", "two"]));
