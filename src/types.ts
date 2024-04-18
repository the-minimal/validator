import type { InferAssertion, UnknownAssertion } from "@the-minimal/types";

export type Infer<$Assertion extends UnknownAssertion> =
	InferAssertion<$Assertion>;
