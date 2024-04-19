import { email } from "@assertions/email";
import { fc, test } from "@fast-check/vitest";
import { expect } from "vitest";

test.prop([fc.constant("yamiteru@icloud.com")])(
	"should not throw if value matches email RegExp",
	(value) => {
		expect(() => email(value)).not.toThrow();
	},
);

test.prop([fc.string()])(
	"should throw if value does not matche email RegExp",
	(value) => {
		expect(() => email(value)).toThrow();
	},
);
