const user = object({
	name: string,
	email: and([
		string,
		match(emailRegex)
	]),
	password: and([
		string,
		tap(and([
			length,
			gte(8),
			lte(16)
		])),
		match(passwordRegex)
	]),
	friends: lazy(() => array(user)),
	role: enum(["USER", "ADMIN"]),
	age: and([
		number,
		int,
		gte(0),
		lte(150)
	])
});

vUser({
	name: "Yamiteru",
	email: "yamiteru@icloud.com",
	password: "Test12345678",
	friends: [],
	role: "ADMIN",
	age: 26
});
