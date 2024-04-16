import { REGEX_EMAIL } from "@constants";
import { regex } from "@validators/regex";
import { expect, test } from "vitest";

const validator = regex(REGEX_EMAIL);

test(() => {
	expect(() => validator("yamiteru@icloud.com")).not.toThrow();
	expect(() => validator("ahoj")).toThrow();
});
