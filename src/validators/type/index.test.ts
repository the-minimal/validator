import { type } from "@validators/type";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => type("string")("a")).not.toThrow();
	expect(() => type("string")({})).toThrow();
});
