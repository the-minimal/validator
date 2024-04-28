import type { And } from "@assertions/and/types";
import type { Regex } from "@assertions/email/types";
import type { Type } from "@assertions/type/types";
import type { AnyBrand, Brand } from "@the-minimal/types";
import type { InferInput, InferOutput } from "@types";

export namespace General {
	export type Object<$Schema extends ObjectSchema> = Brand<
		"object",
		any,
		{
			input: InferObjectInputs<$Schema>;
			output: InferObjectOutputs<$Schema>;
		}
	>;
}

export type ObjectSchema = Record<string, AnyBrand>;

export type ObjectAny = Record<any, any>;

export type InferObjectInputs<$Types extends ObjectAny> = {
	[$Key in keyof $Types]: InferInput<$Types[$Key]>;
};

export type InferObjectOutputs<$Types extends ObjectAny> = {
	[$Key in keyof $Types]: InferOutput<$Types[$Key]>;
};
