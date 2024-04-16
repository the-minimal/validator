import { expect, it } from "bun:test";
import { number } from "@validators/number";
import { array } from "./index";

const validator = array(number);

it("should not throw", () => {
	expect(() => validation([1, 2, 3])).not.toThrow();
});

it("should throw", () => {
	expect(() => validation(1)).toThrow();
	expect(() => validation([1, "2", 3])).toThrow();
});
