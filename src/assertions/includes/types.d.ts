import type { Brand } from "@the-minimal/types";

export namespace Validate {
	export namespace List {
		export type Includes<$Input> = Brand<"list-includes", $Input>;
	}
}
