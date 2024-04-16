import { includes } from "@validators/includes";
import { expect, it, test } from "vitest";

const validator = includes("el");

test(() => {
	expect(() => validator("hello")).not.toThrow();
	expect(() => validator("ahoj")).toThrow();
});
