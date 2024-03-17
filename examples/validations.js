const vUser = vStruct({
	name: vString,
	email: vSequence([
		vString,
		vMatch(emailRegex)
	]),
	password: vSequence([
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
	age: vSequence([
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
