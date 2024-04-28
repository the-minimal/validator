import { and } from "@assertions/and";
import { email } from "@assertions/email";
import { object } from "@assertions/object";
import { string } from "@assertions/string";

export * from "./types";
export * from "./assertions";

const user = object({
	email: and([string, email]),
});

// const zodUser = object({
//   email: string().email()
// });
