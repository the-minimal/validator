import { object as v1_object, memo, and as v1_and, tString as v1_tString, tNumber as v1_tNumber, nInt as v1_nInt, gte as v1_gte, lte as v1_lte, minLength as v1_minLength, maxLength as v1_maxLength } from "../src/index.js";
import { object as v2_object, and as v2_and, tString as v2_tString, tNumber as v2_tNumber, minLength as v2_minLength, rangeValue as v2_rangeValue, rangeLength as v2_rangeLength, nInt as v2_nInt } from "../src/workbench.js";
import { object as zod_object, string as zod_string, number as zod_number } from "zod";
import { object as valibot_object, string as valibot_string, number as valibot_number, minLength as valibot_minLength, maxLength as valibot_maxLength, minValue as valibot_minValue, maxValue as valibot_maxValue, integer } from "valibot";

export const v2_normal = () => v2_object({
	name: v2_and([v2_tString, v2_minLength(2)]),
	password: v2_and([v2_tString, v2_rangeLength(8, 16)]),
	age: v2_and([v2_tNumber, v2_nInt, v2_rangeValue(0, 150)])
});

export const validator_normal = () => v1_object({
	name: v1_and([v1_tString, v1_minLength(2)]),
	password: v1_and([v1_tString, v1_minLength(8), v1_maxLength(16)]),
	age: v1_and([v1_tNumber, v1_nInt, v1_gte(0), v1_lte(150)])
});

export const validator_memo = () => v1_object({
	name: memo(v1_and([v1_tString, v1_minLength(2)])),
	password: memo(v1_and([v1_tString, v1_minLength(8), v1_maxLength(16)])),
	age: memo(v1_and([v1_tNumber, v1_nInt, v1_gte(0), v1_lte(150)]))
});

export const zod = () => zod_object({
	name: zod_string().min(2),
	password: zod_string().min(8).max(16),
	age: zod_number().int().min(0).max(150)
});

export const valibot = () => valibot_object({
	name: valibot_string([valibot_minLength(2)]),
	password: valibot_string([valibot_minLength(8), valibot_maxLength(16)]),
	age: valibot_number([integer(), valibot_minValue(0), valibot_maxValue(150)]),
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
