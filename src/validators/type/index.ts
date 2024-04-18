import { validate } from "@validators/validate";

export const type = <$Type>(type: string) =>
	validate<$Type>((value) => typeof value === type, "type", type);
