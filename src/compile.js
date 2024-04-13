export const tString = (_) => `typeof ${_} === 'string'`;
export const tNumber = (_) => `typeof ${_} === 'number'`;
export const tObject = (_) => `typeof ${_} === 'object'`;

export const gte = (v) => (_) => `${_} >= ${v}`;
export const lte = (v) => (_) => `${_} <= ${v}`;
export const minLength = (v) => (_) => `${_}.length >= ${v}`;
export const maxLength = (v) => (_) => `${_}.length <= ${v}`;
export const rangeLength = (min, max) => (_) => `${_}.length >= ${min} && ${_}.length <= ${max}`;
export const rangeValue = (min, max) => (_) => `${_} >= ${min} && ${_} <= ${max}`;

export const object = (schema) => (_) => `(${Object.entries(schema).map(([k, v]) => v(`${_}.${k}`)).join(" && ")})`;

export const and = (fns) => (_) => `(${fns.map((fn) => fn(_)).join(" && ")})`;