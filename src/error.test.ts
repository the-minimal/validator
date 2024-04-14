import { expect, it } from "bun:test";
import { error } from "./error";

it("should throw custom error", () => {
	expect(() => error("test")).toThrow();
});
