import type { Validation } from "@the-minimal/types";
import { options } from "@validators/options/index";
import { assertType } from "vitest";

assertType<Validation<"one" | "two">>(options(["one", "two"]));
