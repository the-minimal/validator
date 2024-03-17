// General
class ValidationError extends Error {}

export const Assert = (predicate) => (v) => predicate(v) ? v: 0();

// TODO: think of better name
export const Parse = (fn, v) => {
	try {
		return fn(v);
	} catch(e) {
		throw new ValidationError(e?.message || e);
	}
};

// TODO: think of better name
export const SafeParse = (fn, v) => {
	try {
		return {
			success: true,
			data: fn(v)
		};
	} catch(e) {
		return {
			success: false,
			error: e?.message || e
		};
	}
};

// TODO: think of better name
export const Is = (fn, v) => {
	try {
		fn(v);
		return true;
	} catch {
		return false;
	}
};

export const Fallback = (fn, def) => (v) => {
	try {
		return fn(v);
	} catch {
		// TODO: could be a function
		return def;
	}
};

// Type
export const vType = (type) => Assert((v) => typeof v === type);

export const vString = vType("string");
export const tString = (value) => `${value}`;

export const vNumber = vType("number");
export const tNumber = (value) => +value;

export const vBoolean = vType("boolean");
export const tBoolean = (value) => !!value;

export const vBigInt = vType("bigint");
export const tBigInt = (value) => BigInt(value);

export const vObject = vType("object");
export const vUndefined = vType("undefined");
export const vFunction = vType("function");

// Instance
export const vInstance = (cls) => Assert((v) => v instanceof cls);

export const vDate = vInstance(Date);
export const vMap = vInstance(Map);
export const vWeakMap = vInstance(WeakMap);
export const vSet = vInstance(Set);
export const vWeakSet = vInstance(WeakSet);

// Compare
export const eq = (right) => Assert((left) => left === right);
export const ne = (right) => Assert((left) => left !== right);

export const gte = (right) => Assert((left) => left >= right);
export const gt = (right) => Assert((left) => left > right);

export const lte = (right) => Assert((left) => left <= right);
export const lt = (right) => Assert((left) => left < right);

// String
export const vWellFormed = Assert(String.isWellFormed);
export const vStartsWith = (searchString, endPosition) => Assert((v) => v.startsWith(searchString, endPosition));
export const vEndsWith = (searchString, endPosition) => Assert((v) => v.endsWith(searchString, endPosition));
export const vIncludes = (searchString, position) => Assert((v) => v.includes(searchString, position));
export const vLocaleCompare = (compareString, locales, options) => Assert((v) => v.localeCompare(compareString, locales, options));
export const vMatch = (regexp) => Assert(regexp.test);

export const tIndexOf = (searchString, position) => (v) => v.indexOf(searchString, position);
export const tLastIndexOf = (searchString, position) => (v) => v.lastIndexOf(searchString, position);
export const tAt = (index) => (v) => v.at(index);
export const tCharAt = (index) => (v) => v.charAt(index);
export const tCharCodeAt = (index) => (v) => v.charCodeAt(index);
export const tCharPointAt = (index) => (v) => v.charPointAt(index);
export const tConcat = (...strs) => (v) => v.concat(...strs);
export const tNormalize = (form) => (v) => v.normalize(form);
export const tPadStart = (targetLength, padString) => (v) => v.padStart(targetLength, padString);
export const tPadEnd = (targetLength, padString) => (v) => v.padEnd(targetLength, padString);
export const tRepeat = (count) => (v) => v.repeat(count);
export const tReplace = (pattern, replacement) => (v) => v.replace(pattern, replacement);
export const tReplaceAll = (pattern, replacement) => (v) => v.replaceAll(pattern, replacement);
export const tSearch = (regexp) => (v) => v.search(regexp);
export const tSlice = (indexStart, indexEnd) => (v) => v.slice(indexStart, indexEnd);
export const tSplit = (separator, limit) => (v) => v.split(separator, limit);
export const tSubstring = (indexStart, indexEnd) => (v) => v.substring(indexStart, indexEnd);
export const tLocaleLowerCase = (locales) => (v) => v.toLocaleLowerCase(locales);
export const tLocaleUpperCase = (locales) => (v) => v.toLocaleUpperCase(locales);
export const tLowerCase = (v) => v.toLowerCase();
export const tUpperCase = (v) => v.toUpperCase();
export const tTrim = (v) => v.trim();
export const tTrimStart = (v) => v.trimStart();
export const tTrimEnd = (v) => v.trimEnd();

// Math
export const tAbs = Math.abs;
export const tAcos = Math.acos;
export const tAcosh = Math.acosh;
export const tAsin = Math.asin;
export const tAsinh = Math.asinh;
export const tAtan = Math.atan;
export const tAtan2 = Math.atan2;
export const tAtanh = Math.atanh;
export const tCbrt = Math.cbrt;
export const tCeil = Math.ceil;
export const tClz32 = Math.clz32;
export const tCos = Math.cos;
export const tCosh = Math.cosh;
export const tExp = Math.exp;
export const tExpm1 = Math.expm1;
export const tFloor = Math.floor;
export const tFround = Math.fround;
export const tHypot = Math.hypot;
export const tImul = Math.imul;
export const tLog = Math.log;
export const tLog10 = Math.log10;
export const tLog1p = Math.log1p;
export const tLog2 = Math.log2;
export const tMax = Math.max;
export const tMin = Math.min;
export const tPow = Math.pow;
export const tRandom = Math.random;
export const tRound = Math.round;
export const tSign = Math.sign;
export const tSin = Math.sin;
export const tSinh = Math.sinh;
export const tSqrt = Math.sqrt;
export const tTan = Math.tan;
export const tTanh = Math.tanh;
export const tTrunc = Math.trunc;

// Number
export const vInt = Assert(Number.isInteger);
export const vFinite = Assert(Number.isFinite);
export const vNan = Assert(Number.isNaN);
export const vSafe = Assert(Number.isSafeInteger);
export const vMultipleOf = (n) => Assert((v) => !(v % n));

export const tInt = Number.parseInt;
export const tFloat = Number.parseFloat;
export const tExponential = (fractionDigits) => (v) => v.toExponential(fractionDigits);
export const tFixed = (digits) => (v) => v.toFixed(digits);
export const tLocaleString = (locales, options) => (v) => v.toLocaleString(locales, options);
export const tPrecision = (precision) => (v) => v.toPrecision(precision);
export const tPlus = (n) => (v) => v + n;
export const tMinus = (n) => (v) => v - n;
export const tMultiply = (n) => (v) => v * n;
export const tDivide = (n) => (v) => v / n;
export const tRemainder = (n) => (v) => v % n;
export const tAnd = (n) => (v) => v & n;
export const tNot = (v) => ~v;
export const tOr = (n) => (v) => v | n;
export const tXor = (n) => (v) => v ^ n;
export const tLeftShift = (n) => (v) => v << n;
export const tRightShift = (n) => (v) => v >> n;
export const tUnisgnedRightShift = (n) => (v) => v >>> n;

// Object
export const vIs = Assert(Object.is);
export const vIn = (prop) => Assert((v) => prop in v);
export const vHasOwn = (prop) => Assert((v) => Object.hasOwn(v, prop));
export const vHasOwnProperty = (prop) => Assert((v) => v.hasOwnProperty(prop));
export const vPrototypeOf = (object) => Assert((v) => v.prototype.isPrototypeOf(object));
export const vExtensible = Assert(Object.isExtensible);
export const vFrozen = Assert(Object.isFrozen);
export const vSealed = Assert(Object.isSealed);
export const vPropertyEnumerable = (prop) => Assert((v) => v.propertyIsEnumerable(prop));

export const tAssign = (...sources) => (v) => Object.assign(v, ...sources);
export const tCreate = Object.create;
export const tEntries = Object.entries;
export const tKeys = Object.keys;
export const tFreeze = Object.freeze;
export const tSeal = Object.seal;
export const tFromEntries = Object.fromEntries;
export const tPreventExtensions = Object.preventExtensions;

// Struct
export const vStruct = (schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return (v) => {
		for(let i = 0; i < length; ++i) {
			schema[keys[i]](v[keys[i]]);
		}

		return v;
	};
};

export const tStruct = (schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return (v) => {
		const output = {};

		for(let i = 0; i < length; ++i) {
			output[keys[i]] = schema[keys[i]](v[keys[i]]);
		}

		return output;
	};
};

// Array
export const vArray = Assert(Array.isArray);

// List
export const vList = (fn) => (v) => (v.forEach(fn), v);
export const tList = (fn) => (v) => v.map(fn);

// Flow
export const vFlow = (fns) => (v) => (fns.reduce((fn, v) => fn(v), v), v);
export const tFlow = (fns) => (v) => fns.reduce((fn, v) => fn(v), v);

// Sequence (TODO: think of better name)
export const vSequence = (fns) => (v) => (fns.forEach((fn) => fn(v)), v);

// Enum
export const vEnum = (options) => Assert((v) => options.includes(v));

// Union
// TODO: do we want to re-throw error/s on union error?
export const vUnion = (fns) => {
	const length = fns.length;

	return (v) => {
		for(let i = 0; i < length; ++i) {
			try {
				fns[i](v);
				return v;
			} catch {}
		}

		0();
	};
};

export const tUnion = (fns) => {
	const length = fns.length;

	return (v) => {
		for(let i = 0; i < length; ++i) {
			try {
				return fns[i](v);
			} catch {}
		}

		0();
	};
};






