import { endsWith } from "@validators/endsWith";
import { expect, it, test } from "vitest";

const validator = endsWith("lo");

test(() => {
	expect(() => validator("hello")).not.toThrow();
	expect(() => validator("ahoj")).toThrow();
});
