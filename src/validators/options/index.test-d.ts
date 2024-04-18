import type { Assertion } from "@the-minimal/types";
import { options } from "@validators/options/index";
import { assertType } from "vitest";

assertType<Assertion<"one" | "two">>(options(["one", "two"]));
