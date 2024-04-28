import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace Regex {
		export type Email = Brand<"regex", "email">;
	}
}
