import { number } from "@validators/number";
import { expect, test } from "vitest";
import { array } from "./index";

const validator = array(number);

test(() => {
	expect(() => validator([1, 2, 3])).not.toThrow();
	expect(() => validator(1)).toThrow();
	expect(() => validator([1, "2", 3])).toThrow();
});
