import type { ObjectUnknown } from "@assertions/isObject/types";
import type { Assertion, Pretty } from "@the-minimal/types";

export type ObjectSchema = ObjectUnknown;

export type InferObjectSchema<$Schema extends ObjectSchema> = Pretty<{
	[$Key in keyof $Schema]: Assertion<$Schema[$Key]>;
}>;
