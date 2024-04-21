import { regex } from "@assertions/regex";
import type { Regex } from "@assertions/regex/types";
import type { Assertion } from "@the-minimal/types";
import { assertType } from "vitest";

assertType<Assertion<Regex<"digits">>>(regex<"digits">(/[0-9]/));
