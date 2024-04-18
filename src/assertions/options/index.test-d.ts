import { options } from "@assertions/options/index";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<"one" | "two">>(options(["one", "two"]));
