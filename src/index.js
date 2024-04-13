export class ValidationError extends Error {}

export const parse = (fn, value) => {
	try {
		fn(value);
	} catch (e) {
		throw new ValidationError(e);
	}
};

export const is = (fn, value) => {
	try {
		fn(value);
		return true;
	} catch {
		return false;
	}
};

export const assert = (fn) => (value) => {
	if(fn(value) === false) throw void 0;
};

export const expect = (fn, message) => (value) => {
	try {
		fn(value);
	} catch(e) {
		throw message(e, value);
	}
};

export const rangeValue = (min, max) => assert((v) => v >= min && v <= max);
export const rangeLength = (min, max) => assert((v) => v.length >= min && v.length <= max);

// Memo
export const memo = (fn) => {
	let latest;

	return (v) => {
		if(latest !== v) {
			fn(v);
			latest = v;
		}
	};
};

// And
export const and = (fns) => {
	const length = fns.length;

	return (value) => {
		for(let i = 0; i < length; ++i) {
			fns[i](value);
		}
	};
};

// Both
export const both = (fn1, fn2) => (value) => (fn1(value), fn2(value));

// Or
export const or = (fns) => {
	const length = fns.length;

	return (value) => {
		for(let i = 0; i < length; ++i) {
			try {
				fns[i](value);
			} catch {}

			throw void 0;
		}
	};
};

// Either
export const either = (fn1, fn2) => (value) => {
	try {
		fn1(value);
	} catch {
		fn2(value);
	}
};

// Object
export const object = (schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return (value) => {
		for(let i = 0; i < length; ++i) {
			schema[keys[i]](value[keys[i]]);
		}
	};
};

// Array
export const array = (fn) => (value) => {
	for(let i = 0; i < items.length; ++i) {
		fn(value[i]);
	}
};

// [t]ype
export const tString = (v) => assert(typeof v === "string");
export const tNumber = (v) => assert(typeof v === "number");
export const tBigInt = (v) => assert(typeof v === "number");
export const tBoolean = (v) => assert(typeof v === "number");
export const tObject = (v) => assert(typeof v === "object");
export const tUndefined = (v) => assert(typeof v === "object");
export const tFunction = (v) => assert(typeof v === "object");
