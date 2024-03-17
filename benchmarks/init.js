import benchmark from "benchmark";
import { v2_normal, validator_normal, validator_memo, zod, valibot } from "./_shared.js";

let v2_normal_tmp = v2_normal();
let validator_normal_tmp = validator_normal();
let validator_memo_tmp = validator_memo();
let zod_tmp = zod();
let valibot_tmp = valibot();

new benchmark.Suite()
	.add('validator - v2', function() {
		v2_normal_tmp = v2_normal();
	})
	.add('validator - normal', function() {
		validator_normal_tmp = validator_normal();
	})
	.add('validator - memo', function() {
		validator_memo_tmp = validator_memo();
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
