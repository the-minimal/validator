import {
	object as v1_object,
	and as v1_and,
	tString as v1_tString,
	tNumber as v1_tNumber,
	nInt as v1_nInt,
	minLength as v1_minLength,
	rangeLength, rangeValue
} from "../src/index.js";

export const validator_normal = () => v1_object({
	name: v1_and([v1_tString, v1_minLength(2)]),
	password: v1_and([v1_tString, rangeLength(8, 16)]),
	age: v1_and([v1_tNumber, v1_nInt, rangeValue(0, 150)])
});

export const user = {
	name: "Yamiteru",
	password: "Test123456",
	age: 26
};

const validator_normal_user = validator_normal();

let validator_normal_tmp = validator_normal_user(user);

while(true) {
	validator_normal_tmp = validator_normal_user(user);
}
