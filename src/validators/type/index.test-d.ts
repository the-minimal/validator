import type { Validation } from "@the-minimal/types";
import { type } from "@validators/type";
import { assertType, it } from "vitest";

it("should not throw", () => {
	assertType<Validation<string>>(type<string>("string"));
});
