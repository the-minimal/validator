import { object as validator_object, and, tString, tNumber, nInt, pLength, gte, lte } from "../src";
import { object as zod_object, string as zod_string, number as zod_number } from "zod";
import { object as valibot_object, string as valibot_string, number as valibot_number, minLength, maxLength, minValue, maxValue, integer } from "valibot";

export const validator = () => validator_object({
	name: and([tString, pLength(gte(2))]),
	password: and([tString, pLength(and([gte(8), lte(16)]))]),
	age: and([tNumber, nInt, gte(0), lte(150)])
});

export const zod = () => zod_object({
	name: zod_string().min(2),
	password: zod_string().min(8).max(16),
	age: zod_number().int().min(0).max(150)
});

export const valibot = () => valibot_object({
	name: valibot_string([minLength(2)]),
	password: valibot_string([minLength(8), maxLength(16)]),
	age: valibot_number([integer(), minValue(0), maxValue(150)]),
});

export const user = {
	name: "Yamiteru",
	password: "Test123456",
	age: 26
};
