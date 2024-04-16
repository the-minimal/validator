import { expect, it } from "bun:test";
import { date } from "@validators/date";

it("should not throw", () => {
	expect(() => date(new Date())).not.toThrow();
});

it("should throw", () => {
	expect(() => date(1)).toThrow();
});
