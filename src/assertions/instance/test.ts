import { expect, it } from "bun:test";
import { date } from "@assertions/date";

it("should not throw if value is instance of Date", () => {
	expect(() => date(new Date())).not.toThrow();
});

it("should throw if value is not instance of Date", () => {
	expect(() => date(1)).toThrow();
});
