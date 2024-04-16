import { expect, it } from "bun:test";
import { any } from "@validators/any/index";

it("should not throw", () => {
	expect(() => any(2)).not.toThrow();
});
