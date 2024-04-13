import benchmark from "benchmark";
import { parse } from "valibot";
import { v2_normal, validator_normal, validator_memo, zod, valibot, user } from "./_shared.js";

const v2_normal_user = v2_normal();
const validator_normal_user = validator_normal();
const validator_memo_user = validator_memo();
const zod_user = zod();
const valibot_user = valibot();

let v2_normal_tmp = v2_normal_user(user);
let validator_normal_tmp = validator_normal_user(user);
let validator_memo_tmp = validator_memo_user(user);
let zod_tmp = zod_user.parse(user);
let valibot_tmp = parse(valibot_user, user);
let vanilla_tmp = 0;

new benchmark.Suite()
	.add('vanilla', function() {
		for(let i = 0; i < 10; ++i) {
			if(typeof user !== "object" || user === null || typeof user.name !== "string" || user.name.length < 2 || typeof user.password !== "string" || user.password.length < 8 || user.password.length > 16 || typeof user.age !== "number" || user.age < 0 || user.age > 150) {
				throw 0;
			}

			vanilla_tmp = user;
		}
	})
	.add('validator - v2', function() {
		v2_normal_tmp = v2_normal_user(user);
	})
	.add('validator - normal', function() {
		validator_normal_tmp = validator_normal_user(user);
	})
	.add('validator - memo', function() {
		validator_memo_tmp = validator_memo_user(user);
	})
	.add('zod', function() {
		zod_tmp = zod_user.parse(user);
	})
	.add('valibot', function() {
		valibot_tmp = parse(valibot_user, user);
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
	.run();
