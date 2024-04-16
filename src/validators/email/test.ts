import { email } from "@validators/email";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => email("yamiteru@icloud.com")).not.toThrow();
	expect(() => email("yamiteru")).toThrow();
});
