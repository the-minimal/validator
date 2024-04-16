import { email } from "@validators/email";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => email("yamiteru@icloud.com")).not.toThrow();
});

it("should throw", () => {
	expect(() => email("yamiteru")).toThrow();
});
