import { date } from "@validators/date";
import { expect, it, test } from "vitest";

test(() => {
	expect(() => date(new Date())).not.toThrow();
	expect(() => date(1)).toThrow();
});
