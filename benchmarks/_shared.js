import {
	object as v1_object,
	memo,
	both as v1_both,
	tString as v1_tString,
	tNumber as v1_tNumber,
	rangeLength, rangeValue
} from "../src/index.js";
import { object as v2_object, and as v2_and, tString as v2_tString, tNumber as v2_tNumber, rangeValue as v2_rangeValue, rangeLength as v2_rangeLength } from "../src/workbench.js";
import { object as zod_object, string as zod_string, number as zod_number } from "zod";
import { object as valibot_object, string as valibot_string, number as valibot_number, minLength as valibot_minLength, maxLength as valibot_maxLength, minValue as valibot_minValue, maxValue as valibot_maxValue } from "valibot";

export const v2_normal = () => v2_object({
	name: v2_tString,
	password: v2_and([v2_tString, v2_rangeLength(8, 16)]),
	age: v2_and([v2_tNumber, v2_rangeValue(0, 150)])
});

export const validator_normal = () => v1_object({
	name: v1_tString,
	password: v1_both(v1_tString, rangeLength(8, 16)),
	age: v1_both(v1_tNumber, rangeValue(0, 150))
});

export const validator_memo = () => v1_object({
	name: memo(v1_tString),
	password: memo(v1_both(v1_tString, rangeLength(8, 16))),
	age: memo(v1_both(v1_tNumber, rangeValue(0, 150)))
});

export const zod = () => zod_object({
	name: zod_string(),
	password: zod_string().min(8).max(16),
	age: zod_number().min(0).max(150)
});

export const valibot = () => valibot_object({
	name: valibot_string(),
	password: valibot_string([valibot_minLength(8), valibot_maxLength(16)]),
	age: valibot_number([valibot_minValue(0), valibot_maxValue(150)]),
});

export const user = {
	name: "Yamiteru",
	password: "Test123456",
	age: 26
};

export const user2 = {
	name: "Joe",
	password: "ReallyCool",
	age: 13
};
