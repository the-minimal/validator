import { startsWith } from "@validators/startsWith";
import { expect, it, test } from "vitest";

const validator = startsWith("he");

test(() => {
	expect(() => validator("hello")).not.toThrow();
	expect(() => validator("ahoj")).toThrow();
});
