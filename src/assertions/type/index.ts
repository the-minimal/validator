import { validate } from "@assertions/validate";

export const type = <$Type>(type: string) =>
	validate<$Type>((value) => typeof value === type, "type", type);
