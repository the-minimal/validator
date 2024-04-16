import { Validation } from "@the-minimal/types";
import { and } from "@validators/and/index";
import { boolean } from "@validators/boolean";
import { number } from "@validators/number";
import { object } from "@validators/object";
import { string } from "@validators/string";
import { assertType } from "vitest";

// TODO: fix intersection
// assertType<Validation<{ a: string } & { b: number } & { c: boolean }>>(and([
//   object({ a: string }),
//   object({b: number}),
//   object({c: boolean}),
// ]));
