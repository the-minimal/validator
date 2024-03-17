import { Suite } from "benchmark";
import { parse } from "valibot";
import { validator_normal, validator_memo, zod, valibot, user } from "./_shared.js";

const validator_normal_user = validator_normal();
const validator_memo_user = validator_memo();
const zod_user = zod();
const valibot_user = valibot();

let validator_normal_tmp = validator_normal_user(user);
let validator_memo_tmp = validator_memo_user(user);
let zod_tmp = zod_user.parse(user);
let valibot_tmp = parse(valibot_user, user);

new Suite()
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
