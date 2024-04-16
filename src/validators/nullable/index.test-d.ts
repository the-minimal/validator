import type { Nullable, Validation } from "@the-minimal/types";
import { nullable } from "@validators/nullable";
import { string } from "@validators/string";
import { assertType } from "vitest";

assertType<Validation<Nullable<string>>>(nullable(string));
