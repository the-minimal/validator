import type { Validation } from "@the-minimal/types";
import { type } from "@validators/type";
import { assertType } from "vitest";

assertType<Validation<string>>(type<string>("string"));
assertType<Validation<number>>(type<number>("number"));
assertType<Validation<boolean>>(type<boolean>("boolean"));
assertType<Validation<bigint>>(type<bigint>("bigint"));
