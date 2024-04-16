import { expect, it } from "bun:test";
import { unknown } from "@validators/unknown/index";

it("should not throw", () => {
	expect(() => unknown(1)).not.toThrow();
});
