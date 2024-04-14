import { expect, it } from "bun:test";
import { error } from "./index";

it("should throw custom error", () => {
	expect(() => error("test")).toThrow();
});
