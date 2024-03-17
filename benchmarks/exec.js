import { Suite } from "benchmark";
import { parse } from "valibot";
import { validator, zod, valibot, user } from "./_shared.js";

const validator_user = validator();
const zod_user = zod();
const valibot_user = valibot();

let validator_tmp = validator_user(user);
let zod_tmp = zod_user.parse(user);
let valibot_tmp = parse(valibot_user, user);

new Suite()
	.add('validator', function() {
		validator_tmp = validator_user(user);
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
