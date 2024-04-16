import { date } from "@validators/date";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => date(new Date())).not.toThrow();
});

it("should throw", () => {
	expect(() => date(1)).toThrow();
});
