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

export const assert = (predicate) => (value) => void (predicate(value) || 0());

export const expect = (fn, message) => (value) => {
	try {
		fn(value);
	} catch(e) {
		throw message(e, value);
	}
};

export const lazy = (fn) => (v) => fn(v)(v);

export const literal = (value) => () => value;

// TODO: think of better name
export const _enum = (options) => assert((v) => options.includes(v));

export const eq = (right) => assert((left) => left === right);
export const ne = (right) => assert((left) => left !== right);
export const gte = (right) => assert((left) => left >= right);
export const gt = (right) => assert((left) => left > right);
export const lte = (right) => assert((left) => left <= right);
export const lt = (right) => assert((left) => left < right);
export const minLength = (right) => assert((v) => v.length >= right);
export const maxLength = (right) => assert((v) => v.length <= right);

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

// [t]ype
export const type = (type) => assert((v) => typeof v === type);

export const tString = type("string");
export const tNumber = type("number");
export const tBigInt = type("bigint");
export const tBoolean = type("boolean");
export const tObject = type("object");
export const tUndefined = type("undefined");
export const tFunction = type("function");
export const tArray = assert(Array.isArray);

// [i]nstance
export const instance = (cls) => assert((v) => v instanceof cls);

export const iDate = instance(Date);
export const iMap = instance(Map);
export const iWeakMap = instance(WeakMap);
export const iSet = instance(Set);
export const iWeakSet = instance(WeakSet);

// [s]tring
export const sWellFormed = assert(String.isWellFormed);
export const sStartsWith = (searchString, endPosition) => assert((v) => v.startsWith(searchString, endPosition));
export const sEndsWith = (searchString, endPosition) => assert((v) => v.endsWith(searchString, endPosition));
export const sIncludes = (searchString, position) => assert((v) => v.includes(searchString, position));
export const sLocaleCompare = (compareString, locales, options) => assert((v) => v.localeCompare(compareString, locales, options));
export const sMatch = (regexp) => assert(regexp.test);

// [n]umber
export const nInt = assert(Number.isInteger);
export const nFinite = assert(Number.isFinite);
export const nNan = assert(Number.isNaN);
export const nSafe = assert(Number.isSafeInteger);
export const nMultipleOf = (n) => assert((v) => !(v % n));

// [o]bject
export const object = (schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return (value) => {
		tObject(value);

		for(let i = 0; i < length; ++i) {
			schema[keys[i]](value[keys[i]]);
		}
	};
};

export const oIs = assert(Object.is);
export const oIn = (prop) => assert((v) => prop in v);
export const oHasOwn = (prop) => assert((v) => Object.hasOwn(v, prop));
export const oHasOwnProperty = (prop) => assert((v) => v.hasOwnProperty(prop));
export const oPrototypeOf = (object) => assert((v) => v.prototype.isPrototypeOf(object));
export const oExtensible = assert(Object.isExtensible);
export const oFrozen = assert(Object.isFrozen);
export const oSealed = assert(Object.isSealed);
export const oPropertyEnumerable = (prop) => assert((v) => v.propertyIsEnumerable(prop));

// [a]rray
export const array = (fn) => (value) => {
	tArray(value);

	for(let i = 0; i < items.length; ++i) {
		fn(value[i]);
	}
};

