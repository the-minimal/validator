import type { Validate as AndValidate } from "@assertions/and/types";
// TODO: this is fucking ugly
import type { Validate as IsObjectValidate } from "@assertions/isObject/types";
import type { Validate as NotValueValidate } from "@assertions/notValue/types";
import { error } from "@error";

/**
 * Checks that the value is of type object and is not null.
 *
 * @example
 * ```ts
 * isObject(1); // Error: isObject
 * isObject(null); // Error: isObject
 * isObject({}); // passes
 * ```
 */
export const isObject = ((v: unknown) =>
	(v !== null && typeof v === "object") ||
	error(isObject)) as unknown as AndValidate.And<
	[NotValueValidate.Value.Ne<null>, IsObjectValidate.Type.Object]
>;
