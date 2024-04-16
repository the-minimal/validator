import { unknown } from "@validators/unknown";
import { expect, it } from "vitest";

it("should not throw", () => {
	expect(() => unknown(1)).not.toThrow();
});
