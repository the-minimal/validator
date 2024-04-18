import { number } from "@assertions/number";
import { expect, test } from "vitest";
import { array } from "./index";

const assertion = array(number);

test(() => {
	expect(() => assertion([1, 2, 3])).not.toThrow();
	expect(() => assertion(1)).toThrow();
	expect(() => assertion([1, "2", 3])).toThrow();
});
