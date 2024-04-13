export const assert = (value) => {
	if(value === false) throw undefined;
};

const string = (v) => /** #__PURE__ */ assert(typeof v === "string");

console.log(string("hello"));
console.log(string(1));
