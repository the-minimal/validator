export const assert = (predicate) => (value) => predicate(value) || 0();

export const expect = (fn, message) => (value) => {
	try {
		fn(value);
	} catch(e) {
		throw message(e, value);
	}
};

export const lazy = (fn) => (v) => fn(v)(v);

export const literal = (value) => () => value;
export const any = (_) => {};

export const length = (fn) => (v) => fn(v.length);

// Type
export const type = (type) => assert((v) => typeof v === type);

export const string = type("string");
export const number = type("number");
export const bigint = type("bigint");
export const boolean = type("boolean");
export const _object = type("object");
export const _undefined = type("undefined");
export const _function = type("function");

// Instance
export const instance = (cls) => assert((v) => v instanceof cls);

export const date = instance(Date);
export const map = instance(Map);
export const weakMap = instance(WeakMap);
export const set = instance(Set);
export const weakSet = instance(WeakSet);

// Compare
export const eq = (right) => assert((left) => left === right);
export const ne = (right) => assert((left) => left !== right);
export const gte = (right) => assert((left) => left >= right);
export const gt = (right) => assert((left) => left > right);
export const lte = (right) => assert((left) => left <= right);
export const lt = (right) => assert((left) => left < right);

// String
export const wellFormed = assert(String.isWellFormed);
export const startsWith = (searchString, endPosition) => assert((v) => v.startsWith(searchString, endPosition));
export const endsWith = (searchString, endPosition) => assert((v) => v.endsWith(searchString, endPosition));
export const includes = (searchString, position) => assert((v) => v.includes(searchString, position));
export const localeCompare = (compareString, locales, options) => assert((v) => v.localeCompare(compareString, locales, options));
export const match = (regexp) => assert(regexp.test);

// Number
export const int = assert(Number.isInteger);
export const finite = assert(Number.isFinite);
export const nan = assert(Number.isNaN);
export const safe = assert(Number.isSafeInteger);
export const multipleOf = (n) => assert((v) => !(v % n));

// And
export const and = (fns) => {
	const length = fns.length;

	return (value) => {
		for(let i = 0; i < length; ++i) {
			fns[i](value);
		}
	};
};

// Or
export const or = (fns) => {
	const length = fns.length;

	return (value) => {
		for(let i = 0; i < length; ++i) {
			try {
				return fns[i](value);
			} catch {}

			0();
		}
	};
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

export const _is = assert(Object.is);
export const _in = (prop) => assert((v) => prop in v);
export const hasOwn = (prop) => assert((v) => Object.hasOwn(v, prop));
export const hasOwnProperty = (prop) => assert((v) => v.hasOwnProperty(prop));
export const prototypeOf = (object) => assert((v) => v.prototype.isPrototypeOf(object));
export const extensible = assert(Object.isExtensible);
export const frozen = assert(Object.isFrozen);
export const sealed = assert(Object.isSealed);
export const propertyEnumerable = (prop) => assert((v) => v.propertyIsEnumerable(prop));

// Array
export const array = (fn) => (values) => {
	for(let i = 0; i < items.length; ++i) {
		fn(values[i]);
	}
};

export const isArray = assert(Array.isArray);

// Enum
export const _enum = (options) => assert((v) => options.includes(v));
