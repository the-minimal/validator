import { Suite } from "benchmark";
import { validator, zod, valibot } from "./_shared.js";

let validator_tmp = validator();
let zod_tmp = zod();
let valibot_tmp = valibot();

new Suite()
	.add('validator', function() {
		validator_tmp = validator();
	})
	.add('zod', function() {
		zod_tmp = zod();
	})
	.add('valibot', function() {
		valibot_tmp = valibot();
	})
	.on('cycle', function(event) {
		console.log(String(event.target));
	})
	.on('complete', function() {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
	.run();
