import { expect, it } from "bun:test";
import { literal } from "./literal";

const validation = literal(1);

it("should not throw if values match", () => {
	expect(() => validation(1)).not.toThrow();
});

it("should throw if values do not match", () => {
	expect(() => validation("1")).toThrow();
});
