import { test } from "@fast-check/vitest";
import { ValidationError } from "@utils/error/index.js";
import { expect } from "vitest";

test("should have name equal to ValidationError", () => {
	const cause = {};
	const message = "Error";

	try {
		ValidationError(cause, message);
	} catch (e: any) {
		expect(e.name).toBe("ValidationError");
		expect(e.cause).toBe(cause);
		expect(e.message).toBe(message);
	}
});
