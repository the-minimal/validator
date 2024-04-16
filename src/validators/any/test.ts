import { any } from "@validators/any";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => any(2)).not.toThrow();
});
