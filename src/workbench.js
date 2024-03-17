export const tString = (v) => typeof v === "string";
export const tNumber = (v) => typeof v === "number";

export const nInt = Number.isInteger;

export const rangeValue = (min, max) => (v) => v >= min && v <= max;

export const rangeLength = (min, max) => (v) => v.length >= min && v.length <= max;

export const minLength = (n) => (v) => v.length >= n;
export const maxLength = (n) => (v) => v.length <= n;

export const and = (fns) => {
	const length = fns.length;

	return (value) => {
		let current;

		for(let i = 0; i < length; ++i) {
			if((current = fns[i](value)) !== true) {
				return current;
			}
		}

		return true;
	};
};

export const object = (schema) => {
	const keys = Object.keys(schema);
	const length = keys.length;

	return (value) => {
		let current;

		for(let i = 0; i < length; ++i) {
			if((current = schema[keys[i]](value[keys[i]])) !== true) {
				return current;
			}
		}

		return true;
	};
};
