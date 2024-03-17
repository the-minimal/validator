const vUser = vStruct({
	name: vString,
	email: vPipe([
		vString,
		vMatch(emailRegex)
	]),
	password: vPipe([
		vString,
		Tap(vPipe([
			Length,
			vGte(8),
			vLte(16)
		])),
		vMatch(passwordRegex)
	]),
	friends: Lazy(() => vArray(vUser)),
	role: vEnum(["USER", "ADMIN"]),
	age: vPipe([
		vNumber,
		vInt,
		vGte(0),
		vLte(150)
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
