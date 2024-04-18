import { type } from "@validators/type";
import { expect, test } from "vitest";

test(() => {
	expect(() => type<string>("string")("a")).not.toThrow();
	expect(() => type<string>("string")({})).toThrow();
});
