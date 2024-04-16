import { expect, it } from "bun:test";
import { email } from "@validators/email/index";

it("should not throw", () => {
	expect(() => email("yamiteru@icloud.com")).not.toThrow();
});

it("should throw", () => {
	expect(() => email("yamiteru")).toThrow();
});
