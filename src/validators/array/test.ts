import { number } from "@validators/number";
import { expect, it } from "vitest";
import { array } from "./index";

const validator = array(number);

it("should not throw", () => {
	expect(() => validator([1, 2, 3])).not.toThrow();
});

it("should throw", () => {
	expect(() => validator(1)).toThrow();
	expect(() => validator([1, "2", 3])).toThrow();
});
